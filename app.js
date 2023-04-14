
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const fs = require('fs');
const {create} = require('express-handlebars');
const fileUpload = require('express-fileupload');
const moment = require('moment');
const path = require('path');
const {controllerHome, controllerProductos, controllerCarrito, controllerInventario, getUserByName, controllerNotFound, controllerBuscador, controllerRegistro, getAdminByName} = require('./controllers/views.controller');
const {getCarrito, addProductoCarro, deleteProductoCarro, vaciarProductoCarro, getSumCarrito} = require('./controllers/carritos.controller');
const {addProductos, deleteProductosById, getProductosById, updateProductos, getProductos} = require('./controllers/productos.controller');
const {buscaMail, buscaUser, autenticador, verificarToken, verificarTokenAdmin, addUser} = require('./controllers/usuarios.controller');
const {generarVenta, getVentas, getVentaById, getDetalleVenta, getVentasByUserId} = require('./controllers/ventas.controller');

const app = express();

app.listen(3000, () => console.log("http://localhost:3000"));

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "La imágen que está subiendo sobrepasa los 5mb permitidos."
  }));
app.use(cors());
app.use('/public', express.static('public'));

//configuracion de handlebars

const hbs = create({
	partialsDir: [
		"views/partials/",
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


app.get("/", controllerHome, (req, res) => {});
app.get("/cart", controllerCarrito, (req, res) => {});
app.get("/detalleProducto/:id", controllerProductos, (req, res) => {});
app.get("/usuario/inventario", verificarTokenAdmin, controllerInventario, (req, res) => {});
app.get("/default", controllerNotFound, (req, res) => {});
app.get("/usuario/buscador", verificarTokenAdmin, controllerBuscador, (req, res) => {});
app.get("/usuario", verificarTokenAdmin, getAdminByName, (req, res) => {});
app.get("/perfil", verificarToken, getUserByName, (req, res) => {});
app.get("/registro", controllerRegistro, (req, res) => {});



app.get("/carritos", verificarToken, getSumCarrito, (req, res) =>{});
app.post("/carritos", verificarToken, addProductoCarro, (req, res) =>{});
app.delete("/carritos", verificarToken, deleteProductoCarro, (req, res) =>{}); 
app.delete("/carrito", verificarToken, vaciarProductoCarro, (req, res) =>{}); 

app.post("/producto", addProductos, (req, res) =>{});
app.delete("/producto/:id", deleteProductosById, (req, res) =>{});
app.get("/producto/:id", getProductosById, (req, res) =>{});
app.put("/producto", updateProductos, (req, res) =>{});
app.get("/productos", getProductos, (req, res) =>{});

app.post("/venta", verificarToken, generarVenta, (req, res) =>{});
app.get("/venta/:id", getVentaById, (req, res) =>{});
app.get("/ventas", getVentas, (req, res) =>{}); 
app.get("/ventas/:idUser", getVentasByUserId, (req, res) =>{}); 
app.get("/detalleVenta/:id", getDetalleVenta, (req, res) =>{});

app.post('/usuarios/registro', buscaMail, addUser, (req, res) => {})
app.post('/usuarios/login', buscaUser, autenticador, (req, res) => {})


