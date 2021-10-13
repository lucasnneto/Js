const express = require("express");
const users = require("./user");

const app = express();

app.use(express.json());

app.get("/", (request, response) => response.json("hello world"));

app.get("/findall", async (req, res) => {
  const list = await users.find();
  return res.json(list);
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

// app.patch("/update",async(req,res)=>{

// })

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
// const users = require("./user");

//UPDATE
// const find = async () => {
//   console.log(
//     await users.findOneAndUpdate(
//       {
//         name: "João B",
//       },
//       {
//         age: 2,
//       },
//       {
//         new: true,
//       }
//     )
//   );
// };
// find();

//FIND ONE
// const find = async () => {
//   console.log(
//     await users.findOne({
//       name: "João B",
//     })
//   );
// };
// find();

//FIND ALL
// const find = async () => {
//   console.log(await users.find());
// };
// find();

//CREATE
// users.create({
//   name: "João B",
//   age: 10,
//   email: "joao@email.com",
// });
