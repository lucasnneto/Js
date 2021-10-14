const { Router } = require("express");

const AuthenticateController = require("../controllers/AuthenticateController");

const routesAuth = Router();

routesAuth.post("/", AuthenticateController.auth);

module.exports = routesAuth;