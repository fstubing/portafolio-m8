const { Carro } = require('../models/');
const { DetalleCarro } = require('../models/'); 
const { Producto } = require('../models/');
const { Usuario } = require('../models/');
const { sequelize } = require('../models/'); 
const { QueryTypes } = require('sequelize');
const jwt = require('jsonwebtoken'); 
const privateKey = '1A2b3C4d';


//gets
module.exports.getCarrito = async (req, res) => {
    Carro.findAll().then(carrito => {
        res.json({data: carrito });
    }).catch(error => {
        res.json({code: 500, message:"Error al cargar el carrito."});
    })
}

module.exports.addProductoCarro = async (req, res) => {
    try{
        let tokenEmail = req.usuario;

        let userSearch= await Usuario.findOne({
            where: {email:tokenEmail},
            attributes: ['id'],
            raw:true
        });
        let idUsuario = userSearch.id;
        console.log(idUsuario)

        let {id_producto} = req.body;

        const [carroCliente, created] = await Carro.findOrCreate({
            raw: true,
            where: {idUsuario},
            defaults: {
                idUsuario
            }
        })


         const [carroConProductos, create2] = await DetalleCarro.findOrCreate({
            where: {idCarro: carroCliente.id, idProducto: id_producto },
            defaults: {
                idCarro: carroCliente.id,
                idProducto: id_producto,
                cantidad: 1
            }
        })

        if(!create2){
            carroConProductos.increment({cantidad:1})
        }

        //validar si producto tiene stock suficiente
        let producto = await Producto.findByPk(id_producto);

        if(carroConProductos.cantidad > producto.stock){
            await carroConProductos.update({ cantidad: producto.stock }, {
                where: {
                  id: producto.id
                }
              });
            
            return res.status(201).json({message: "No hay más productos en stock."})
        }

        let indicadorCarro = await DetalleCarro.sum('cantidad')

        res.status(201).json({message: "Producto agregado correctamente.", data: indicadorCarro})

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Error al agregar el producto al carro."})
    }
}

module.exports.deleteProductoCarro = async (req, res) => {
    try{
        //id_cliente, id_producto, cantidad
        let {id_producto} = req.body;
        let tokenEmail = req.usuario;

        let userSearch= await Usuario.findOne({
            where: {email:tokenEmail},
            attributes: ['id'],
            raw:true
        });
        let idUsuario = userSearch.id;

        const carroCliente = await Carro.findOne({
            raw: true,
            where: {idUsuario: idUsuario },
        })

        const carroConProductos= await DetalleCarro.findOne({
            where: {idCarro: carroCliente.id, idProducto: id_producto}
        });

        if(carroConProductos == null){
            return res.status(400).json({message: "El producto que intenta restar no existe."})
        }
    
        await carroConProductos.decrement({cantidad: 1})

        if(carroConProductos.dataValues.cantidad == 0){
            carroConProductos.destroy();
            return res.status(201).json({message: "Ha quitado todos los productos de ese tipo."})
        }

        res.status(201).json({message: "Producto Eliminado correctamente."})

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Error al eliminar el producto del carro."})
    }
}

module.exports.vaciarProductoCarro = async (req, res) => {
    try{
        let tokenEmail = req.usuario;

        let userSearch= await Usuario.findOne({
            where: {email:tokenEmail},
            attributes: ['id'],
            raw:true
        });
        let idUser = userSearch.id;

        const carroCliente = await Carro.findOne({
            raw: true,
            where: {idUsuario: idUser },
        })

        const carroConProductos= await DetalleCarro.findAll({
            where: {idCarro: carroCliente.id},
            raw:true
        });

        if(carroConProductos == null){
            return res.status(400).json({message: "No existen productos en el carro"})
        }

        if(carroConProductos){
            DetalleCarro.destroy({
                where: {
                    idCarro: carroCliente.id
                  },
                  force: true
            });
            Carro.destroy({
                where: {
                    idUsuario: idUser
                },
                force: true
            })

            return res.status(201).json({message: "Ha quitado todos los productos del carro"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Error al eliminar el producto del carro"})
    }
}

module.exports.getSumCarrito = async (req, res) => {
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

        let indicadorCarro = await sequelize.query(`    
        SELECT SUM(dc.cantidad) FROM "DetalleCarros" dc JOIN 
        "Carros" car ON car.id = dc."idCarro" WHERE car."idUsuario" = ?`,
            {
              replacements: [stringUser],
              type: QueryTypes.SELECT
            }
        );
        
        if(indicadorCarro){
            res.json({indicadorCarro});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({code: 500, message:"No se pudo obtener datos del carrito"});
    }
}