const {Producto} = require('../models/'); 
const { Carro } = require('../models/'); 
const { DetalleCarro } = require('../models/'); 
const { Usuario } = require('../models/');
const { sequelize } = require('../models/'); 
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const jwt = require('jsonwebtoken'); 
const privateKey = '1A2b3C4d';

//console.log(Producto)
module.exports.controllerHome= async (req, res) => {
    try {
        let productos = await  Producto.findAll({
            raw:true,
            where: {
                stock: {
                    [Op.gt]: 0
                }      
            }
        });

        res.render("home", {
            productos, title: 'Home'
        });
    } catch (error) {
        res.status(500).render("home", {message : "Error al desplegar página"})
    }
};

module.exports.controllerProductos = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await  Producto.findByPk(id, {
            raw:true
        });
        let arrayProducto = [] 
        arrayProducto.push(producto)
        res.render("detalleProducto", {
            arrayProducto, title: 'Detalle del Producto'
        });
    } catch (error) {
        res.status(500).render("detalleProducto", {message : "Error al desplegar página"})
    }

}


module.exports.controllerCarrito = async (req, res) => {
    try {
        let token = req.query.token
        let emailUser

        jwt.verify(token, privateKey, (error, data) => {
            if(error) {
                console.log(error)
            } else {
                emailUser = data.usuario
            }
        })

        let userSearch= await Usuario.findOne({
            where: {email:emailUser},
            attributes: ['id'],
            raw:true
        });
        let stringUser=userSearch.id

        let carrito = await sequelize.query(`
            select pd.id, pd.nombre, pd.marca, pd.descripcion, pd.precio, pd.stock, pd.imagen1, cp.cantidad, (pd.precio * cp.cantidad) total from "Carros" ca
            join "DetalleCarros" cp on ca.id = cp."idCarro"
            join "Productos" pd on pd.id = cp."idProducto"
            where ca."idUsuario" = ?
            order by pd.id`,
            {
                replacements: [stringUser],
                type: QueryTypes.SELECT
            }
        )

        let productos = carrito;
        console.log(productos)

        let calculadora = await sequelize.query(`    
            select ca.id, sum(pd.precio * cp.cantidad) total from "Carros" ca
            join "DetalleCarros" cp on ca.id = cp."idCarro"
            join "Productos" pd on pd.id = cp."idProducto"
            where ca."idUsuario" = ?
            group by ca.id`,
            {
                replacements: [stringUser],
                type: QueryTypes.SELECT
            }
        )

        let subtotal = calculadora[0];
        console.log(subtotal)

        res.render("cart", {
            carrito: productos,
            subt: [subtotal],
            title: 'Carro de Compras'
        });
    } catch (error) {
        res.status(500).render("cart", {message : "Error al desplegar página"})
    }
}

module.exports.controllerInventario = async (req, res) => {
    try {
        let productos = await  Producto.findAll({
            raw:true,
            order: [
                ['id', 'ASC']
            ]
        });
        res.render("inventory", {
            productos, title: 'Inventario'
        });      
    } catch (error) {
        res.status(500).render("inventory", {message : "Error al desplegar página"})
    }
}

module.exports.getUserByName = async (req, res) => {
    try {
        let tokenEmail = req.usuario;

        let userSearch= await Usuario.findOne({
            where: {email:tokenEmail},
            attributes: ['id','nombre','apellido','email','clase'],
            raw:true
        });
        let arrayUser=[userSearch]
        if (userSearch === null) {
            res.status(400).send("Usuario no encontrado")
        } else {res.render("perfil", {
            arrayUser, title: 'Mi Perfil'
            });
        }
    } catch (error) {
        res.status(500).render("perfil", {message : "Error al desplegar página"})
    }
}

module.exports.getAdminByName = async (req, res) => {
    try {
        let tokenEmail = req.usuario;

        let userSearch= await Usuario.findOne({
            where: {email:tokenEmail},
            attributes: ['id','nombre','apellido','email','clase'],
            raw:true
        });
        let arrayUser=[userSearch]
        if (userSearch === null) {
            res.status(400).send("Usuario no encontrado")
        } else {res.render("usuario", {
            arrayUser, title: 'Mi Perfil'
            });
        }
    } catch (error) {
        res.status(500).render("usuario", {message : "Error al desplegar página"})
    }
}

module.exports.controllerNotFound = async (req, res) => {
    try {
        res.render("default", {title: 'En construccion'});
        
    } catch (error) {
        res.status(500).render("default", {message : "Error al desplegar página"})
    }
}

module.exports.controllerBuscador = async (req, res) => {
    try {
        res.render("buscador", {title: 'Buscador'});
        
    } catch (error) {
        res.status(500).render("buscador", {message : "Error al desplegar página"})
    }
}

module.exports.controllerRegistro = async (req, res) => {
    try {
        res.render("registro", {title: 'Registro de Usuario'});
        
    } catch (error) {
        res.status(500).render("registro", {message: "Error al desplegar página"})
    }
}