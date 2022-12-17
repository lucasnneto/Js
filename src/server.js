require("dotenv").config();
const express = require("express");
const routes = require("./shared/routes");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (request, response) => response.json("hello world"));

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
