const { Router } = require("express");
const users = require("../schemas/user.js");

const ensureAuth = require("../../../shared/middlewares/EnsureAuthenticate");

const UsersController = require("../controllers/UsersController");

const routesUser = Router();

// routesUser.use(ensureAuth);

routesUser.get("/findall", ensureAuth, UsersController.findAll);
  
routesUser.get("/findfilter", UsersController.findFilter);

routesUser.get("/findone/:id", async (req, res) => {
    const user = await users.findOne({ _id: req.params.id });
    return res.json(user);
});

routesUser.post("/create", async (req, res) => {
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

routesUser.patch("/update/:id", async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const user = await users.findOneAndUpdate({ _id: id }, body, { new: true });
    return res.json(user);
});

routesUser.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    if (!body.age || !body.email || !body.name) {
        return res.status(400).json({ msg: "Falta um ou mais parametros!" });
    }
    const user = await users.findOneAndUpdate({ _id: id }, body, { new: true });
    return res.json(user);
});

routesUser.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await users.findOneAndDelete({ _id: id });
    return res.json({ msg: "Usuario apagado com sucesso!" });
});

module.exports = routesUser;