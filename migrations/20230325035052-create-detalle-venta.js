'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleVenta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idVenta: {
        type: Sequelize.INTEGER,
        references: {
          model: "Venta",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      idProducto: {
        type: Sequelize.INTEGER,
        references: {
          model: "Productos",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            min:0
        }
      },
      precioUnitario: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            min:0
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detalleVenta');
  }
};