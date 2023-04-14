'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Venta.hasMany(models.detalleVenta,{
        foreignKey: "idVenta",
        as: "sellDetail"
      })
      Venta.belongsTo(models.Usuario,{
        foreignKey: "idUsuario",
        as: "user"
      })
    }
  }
  Venta.init({
    idUsuario: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    precioTotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venta',
  });
  return Venta;
};