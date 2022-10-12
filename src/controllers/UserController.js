const User = require("../models/User");
const Endereco = require("../models/Endereco");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async obterUm(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: "Endereco",
    });
    return res.status(200).json(user);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  },
};
