'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {

    let productos = [
      {
        nombre: "HORNO A GAS GALILEO 360",
        marca: "Castelnuovo",
        descripcion: "Horno de combustión a gas, con cuerpo completamente de acero inoxidable 430, superficie de piedra refractaria giratoria 360ª y termómetro de cámara integrado.",
        precio: 450000,
        stock: 16,
        imagen1: "horno_gas.jpg",
        imagen2: "horno2.jpg",
        imagen3: "horno3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PALA CIRCULAR PARA PIZZA 30 CM.",
        marca: "Sanelli Italy",
        descripcion: "Pala para Pizza ø30 cm Redonda con mango Aluminio 96 cm.",
        precio: 48000,
        stock: 48,
        imagen1: "pala_circular.jpg",
        imagen2: "pala2.jpg",
        imagen3: "pala3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "AMASADORA PROFESIONAL APK-50",
        marca: "Pareti-Kitchenette",
        descripcion: "Con nuestras amasadoras industriales Pareti-Kitchenette® podrás facilitar el proceso de producción a gran escala, evitando la limpieza exhaustiva de trabajar en un mesón.",
        precio: 1350000,
        stock: 17,
        imagen1: "amasadora.png",
        imagen2: "amasadora2.png",
        imagen3: "amasadora3.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "BANDEJA PARA PIZZA ø30 ALUMINIO PERFORADA",
        marca: "Castelnuovo",
        descripcion: "Nuestras rejillas para pizza de 30 cm se encuentran fabricadas en aluminio, con ellas podrás hornear una masa mucho más crocante, debido a que la malla ayudará a transferir el calor a la masa.",
        precio: 25990,
        stock: 24,
        imagen1: "bandeja_pizza.jpg",
        imagen2: "bandeja2.jpg",
        imagen3: "bandeja3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "HORNO DE PISO HPK-1 4060",
        marca: "Pareti-Kitchenette",
        descripcion: "El modelo HPK de Pareti-Kitchenette® es un horno tradicional de piso chileno, llevado a su máximo nivel de calidad para satisfacer hasta el más exigente de los panaderos",
        precio: 1460000,
        stock: 19,
        imagen1: "HORNO_HPK_1.jpg",
        imagen2: "HORNO_HPK_1_LADO_ABIERTO.jpg",
        imagen3: "HORNO_HPK_40X60_INTERIOR_PIEDRAS.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CORTADOR PARA PIZZA 35 X 9,5 CM",
        marca: "Castelnuovo",
        descripcion: "Cortador de pizza 35 x 9,5 cm de acero inoxidable con mango.",
        precio: 29990,
        stock: 16,
        imagen1: "cortador-pizza1.jpg",
        imagen2: "cortador-pizza2.jpg",
        imagen3: "cortador-pizza3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "KIT MULTIUSO PRO 280 MM",
        marca: "Anodilar",
        descripcion: "Kit multiusos compuesto por el mueble sin base. Viene con un cilindro de 28.0 cm de largo, revolvedora/mezcladora de 3.0 kg y un molinillo y extrusora de boca 08.",
        precio: 599990,
        stock: 18,
        imagen1: "1100.webp",
        imagen2: "yut-4607-1628-1_1.jpg",
        imagen3: "yut-4607-1628-2_1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CORTADOR DE MASAS 19 X 7 CM",
        marca: "Castelnuovo",
        descripcion: "Cortador de masa 19 x 7 cm de acero inoxidable con medidas y mango negro.",
        precio: 14990,
        stock: 29,
        imagen1: "cortador1.jpg",
        imagen2: "cortador2.jpg",
        imagen3: "cortador1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CEPILLO DE BRONCE MANGO ALUMINIO 90",
        marca: "Castelnuovo",
        descripcion: "Cepillo de bronce con mango de aluminio 90 cm.",
        precio: 47990,
        stock: 15,
        imagen1: "cepillo1.jpg",
        imagen2: "cepillo2.jpg",
        imagen3: "cepillo1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Horno portátil para pizza",
        marca: "Beef Maker",
        descripcion: "Horno pizzero portátil. Diseño práctico y fácil de transportar. prepara deliciosas pizzas donde quiera que vayas.",
        precio: 49990,
        stock: 25,
        imagen1: "588487-800-auto.webp",
        imagen2: "588488-800-auto.jpg",
        imagen3: "588489-800-auto.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Productos', productos);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Productos', null, {});
  }
};
