'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Venta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      subtotal: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            min:0
        }
      },
      descuento: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            min:0
        }
      },
      precioTotal: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            min: 0
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
    await queryInterface.dropTable('Venta');
  }
};