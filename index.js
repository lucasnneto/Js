const express = require("express");
const users = require("./user");

const app = express();

app.use(express.json());

app.get("/", (request, response) => response.json("hello world"));

app.get("/findall", async (req, res) => {
  const list = await users.find();
  return res.json(list);
});

app.get("/findfilter", async (req, res) => {
  const idade = req.query.age;
  const list = await users.find({ age: { $gte: idade } });
  return res.json(list);
});

app.get("/findone/:id", async (req, res) => {
  const user = await users.findOne({ _id: req.params.id });
  return res.json(user);
});

app.post("/create", async (req, res) => {
  const body = req.body;
  if (body.age <= 0) {
    return res.status(400).json({ msg: "A idade tem que ser maior que zero." });
  }
  if (!body.email) {
    return res.status(400).json({ msg: "É necessario um email." });
  }
  if (body.name.length > 20) {
    return res.status(400).json({ msg: "Nome muito grande." });
  }
  const user = await users.create(body);
  return res.json(user);
});

app.patch("/update/:id", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const user = await users.findOneAndUpdate({ _id: id }, body, { new: true });
  return res.json(user);
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (!body.age || !body.email || !body.name) {
    return res.status(400).json({ msg: "Falta um ou mais parametros!" });
  }
  const user = await users.findOneAndUpdate({ _id: id }, body, { new: true });
  return res.json(user);
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await users.findOneAndDelete({ _id: id });
  return res.json({ msg: "Usuario apagado com sucesso!" });
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
