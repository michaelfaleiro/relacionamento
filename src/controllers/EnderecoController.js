const User = require("../models/User");
const Endereco = require("../models/Endereco");

module.exports = {
  async index(req, res) {
    const endereco = await Endereco.findAll();
    return res.status(200).json(endereco);
  },

  async indexId(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "Endereco" },
    });
    return res.status(200).json(user);
  },

  async store(req, res) {
    try {
      const { user_id } = req.params;

      const { enderec, bairro } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        res.status(400).json({ message: "User não encontrado" });
      }

      const endereco = await Endereco.create({
        enderec,
        bairro,
        user_id,
      });

      return res.status(200).json(endereco);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
