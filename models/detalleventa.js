'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleVenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detalleVenta.belongsTo(models.Venta,{
        foreignKey: "idVenta",
        as: "sell"
      })
      detalleVenta.belongsTo(models.Producto,{
        foreignKey: "idProducto",
        as: "product"
      })
    }
  }
  detalleVenta.init({
    idVenta: DataTypes.INTEGER,
    idProducto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precioUnitario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detalleVenta',
  });
  return detalleVenta;
};