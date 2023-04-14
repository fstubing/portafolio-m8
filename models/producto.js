'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producto.hasMany(models.DetalleCarro,{
        foreignKey: "idProducto",
        as: "cartDetails"
      })
      Producto.hasMany(models.detalleVenta,{
        foreignKey: "idProducto",
        as: "sellDetails"
      })
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    imagen1: DataTypes.STRING,
    imagen2: DataTypes.STRING,
    imagen3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};


