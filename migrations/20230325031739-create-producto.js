'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      marca: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            min: 0
        }
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: true,
            min: 0
        }
      },
      imagen1: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      imagen2: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true
        }
      },
      imagen3: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true
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
    await queryInterface.dropTable('Productos');
  }
};