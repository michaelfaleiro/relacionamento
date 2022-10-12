const User = require("../models/User");
const Endereco = require("../models/Endereco");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "Enderecos" },
    });
    return res.status(200).json(user);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { enderec, bairro } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      res.status(400).json({ message: "User não encontrado" });
    }

    const endereco = await Endereco.create({
      user_id,
      enderec,
      bairro,
    });

    return res.status(200).json(end);
  },
};
