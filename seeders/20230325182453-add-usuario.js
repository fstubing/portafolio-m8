'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {

    let usuarios = [
      {
        nombre: "Silvia",
        apellido: "Lara",
        email: "slara@mail.cl",
        password: "123456",
        clase: "admin",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ]

    return queryInterface.bulkInsert('Usuarios', usuarios);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};