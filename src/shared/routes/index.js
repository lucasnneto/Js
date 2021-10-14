const { Router } = require("express");
const routesUser = require("../../modules/users/routes/users.routes");

const routes = Router();

routes.use('/users', routesUser);

module.exports = routes;