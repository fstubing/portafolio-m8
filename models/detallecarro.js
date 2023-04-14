'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleCarro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetalleCarro.belongsTo(models.Carro,{
        foreignKey: "idCarro",
        as: "cart"
      })
      DetalleCarro.belongsTo(models.Producto,{
        foreignKey: "idProducto",
        as: "product"
      })
    }
  }
  DetalleCarro.init({
    idCarro: DataTypes.INTEGER,
    idProducto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetalleCarro',
  });
  return DetalleCarro;
};
