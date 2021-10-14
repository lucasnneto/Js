const express = require("express");
const routes = require("./shared/routes");

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (request, response) => response.json("hello world"));

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
