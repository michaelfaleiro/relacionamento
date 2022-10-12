const express = require("express");
const UserController = require("../controllers/UserController");
const EnderecoController = require("../controllers/EnderecoController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.get("/users/:user_id", UserController.obterUm);
routes.post("/users", UserController.store);

routes.get("/endereco", EnderecoController.index);
routes.get("/users/:user_id/endereco", EnderecoController.indexId);
routes.post("/users/:user_id/endereco", EnderecoController.store);

module.exports = routes;
