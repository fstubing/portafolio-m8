const { Router } = require('express');
const router = Router();
const {getCarrito, addProductoCarro, deleteProductoCarro, vaciarProductoCarro, getSumCarrito} = require('../controllers/carritos.controller');
const {addProductos, deleteProductosById, getProductosById, updateProductos, getProductos} = require('../controllers/productos.controller');
const {buscaMail, buscaUser, autenticador, verificarToken, verificarTokenAdmin, addUser} = require('../controllers/usuarios.controller');
const {generarVenta, getVentas, getVentaById, getDetalleVenta, getVentasByUserId} = require('../controllers/ventas.controller');


router.get("/carritos", verificarToken, getSumCarrito, (req, res) =>{});
router.post("/carritos", verificarToken, addProductoCarro, (req, res) =>{});
router.delete("/carritos", verificarToken, deleteProductoCarro, (req, res) =>{}); 
router.delete("/carrito", verificarToken, vaciarProductoCarro, (req, res) =>{}); 

router.post("/producto", addProductos, (req, res) =>{});
router.delete("/producto/:id", deleteProductosById, (req, res) =>{});
router.get("/producto/:id", getProductosById, (req, res) =>{});
router.put("/producto", updateProductos, (req, res) =>{});
router.get("/productos", getProductos, (req, res) =>{});

router.post("/venta", verificarToken, generarVenta, (req, res) =>{});
router.get("/venta/:id", getVentaById, (req, res) =>{});
router.get("/ventas", getVentas, (req, res) =>{}); 
router.get("/ventas/:idUser", getVentasByUserId, (req, res) =>{}); 
router.get("/detalleVenta/:id", getDetalleVenta, (req, res) =>{});

router.post('/usuarios/registro', buscaMail, addUser, (req, res) => {})
router.post('/usuarios/login', buscaUser, autenticador, (req, res) => {})


module.exports = router