'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carro.hasMany(models.DetalleCarro,{
        foreignKey: "idCarro",
        as: "cartDetails"
      })
      Carro.belongsTo(models.Usuario,{
        foreignKey: "idUsuario",
        as: "user"
      })
    }
  }
  Carro.init({
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carro',
  });
  return Carro;
};