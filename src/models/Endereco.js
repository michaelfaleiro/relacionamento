const { Model, DataTypes } = require("sequelize");

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        enderec: DataTypes.STRING,
        bairro: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "userid" });
  }
}
module.exports = Endereco;
