const { Router } = require('express');
const router = Router();
const {controllerHome, controllerProductos, controllerCarrito, controllerInventario, getUserByName, controllerNotFound, controllerBuscador, controllerRegistro, getAdminByName} = require('../controllers/views.controller');
const {verificarToken, verificarTokenAdmin} = require('../controllers/usuarios.controller');


router.get("/", controllerHome, (req, res) => {});
router.get("/cart", controllerCarrito, (req, res) => {});
router.get("/detalleProducto/:id", controllerProductos, (req, res) => {});
router.get("/usuario/inventario", verificarTokenAdmin, controllerInventario, (req, res) => {});
router.get("/default", controllerNotFound, (req, res) => {});
router.get("/usuario/buscador", verificarTokenAdmin, controllerBuscador, (req, res) => {});
router.get("/usuario", verificarTokenAdmin, getAdminByName, (req, res) => {});
router.get("/perfil", verificarToken, getUserByName, (req, res) => {});
router.get("/registro", controllerRegistro, (req, res) => {});


module.exports = router