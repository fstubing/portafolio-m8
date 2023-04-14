'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetalleCarros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCarro: {
        type: Sequelize.INTEGER,
        references: {
          model: "Carros",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      idProducto: {
        type: Sequelize.INTEGER,
        references: {
          model: "Productos",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      cantidad: {
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
    await queryInterface.dropTable('DetalleCarros');
  }
};