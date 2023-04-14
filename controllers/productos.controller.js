const { Producto } = require('../models/')
const { sequelize, Sequelize } = require('../models/'); 
const express = require('express');
const fs = require('fs');


//gets
module.exports.getProductos = async (req, res) => {
     Producto.findAll().then(productos => {
         res.json({productos});
     }).catch(error => {
         res.json({code: 500, message:"Error al cargar los datos."});
     })
}

module.exports.getProductosById = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await Producto.findByPk(id);
        console.log(producto);
        if (producto === null) {
            res.status(400).send("No se ha encontrado el producto solicitado")
        } else {
            res.json({data: producto, message: "Producto encontrado correctamente."})
        }
    } catch (error) {
        res.status(500).send("Error al buscar el producto x")
    }
}


//posts
module.exports.addProductos = async (req, res) => {
    try{
        if (!req.files) {
            return res.send({
                message: 'No se subió imagen!'
            });
        }
    
        const file = req.files;
        let fileArray = []
    
        for (const key in file) {
            fileArray.push(file[key]);
        }

        let baseRoute = process.cwd()
    
        function move(image) {
            let ruta = baseRoute + '/public/img/' + image.name
            console.log(ruta)
            try { image.mv(ruta); }
            catch (error) {
                return res.send({
                    message: 'error al subir archivo'
                });
            }
        }
    
        Array.isArray(fileArray) ? fileArray.forEach((file) => move(file)) : move(file);
    
        let {nombre, marca, descripcion, precio, stock} = req.body;
        let imagen1= fileArray[0].name
        let imagen2= fileArray[1].name
        let imagen3= fileArray[2].name
        let nuevoProducto = await Producto.create({nombre, marca, descripcion, precio, stock, imagen1, imagen2, imagen3});
        
        res.status(201).json({code: 201, message: "producto creado correctamente."})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message: "Error al guardar el producto."})
    }

}

//deletes
module.exports.deleteProductosById = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await Producto.findByPk(id);

        let arrayImagenes=[producto.dataValues.imagen1, producto.dataValues.imagen2, producto.dataValues.imagen3]
        let baseRoute = process.cwd()
        let ruta = baseRoute + '/public/img/'
        
        arrayImagenes.forEach(img => fs.unlinkSync(ruta+img, (error)=>{
            if(error) {return reject("error al eliminar imagen del producto")}
        }));

        await Producto.destroy({
            where: {
              id
            }
          });
          res.json({code:200, message: "Producto eliminado correctamente."})
    
    } catch (error) {
        res.status(500).json({code: 500, message:"error al eliminar el producto."})
    }
}


//puts

module.exports.updateProductos = async (req, res) => {
    try{
        if (!req.files) {
            return res.send({
                message: 'No se subió imagen!'
            });
        }
    
        const file = req.files;
        let fileArray = []
    
        for (const key in file) {
            fileArray.push(file[key]);
        }

        let baseRoute = process.cwd()
    
        function move(image) {
            let ruta = baseRoute + '/public/img/' + image.name
            try { image.mv(ruta); }
            catch (error) {
                return res.send({
                    message: 'error al subir archivo'
                });
            }
        }
    
        Array.isArray(fileArray) ? fileArray.forEach((file) => move(file)) : move(file);
    
        let {id, nombre, marca, descripcion, precio, stock} = req.body;
        console.log(id, nombre, descripcion, precio, stock)
        let imagen1= fileArray[0].name
        let imagen2= fileArray[1].name
        let imagen3= fileArray[2].name

        await Producto.update({ nombre, marca, descripcion, precio, stock, imagen1, imagen2, imagen3 }, {
            where: {
              id
            }
        });
        res.json({code: 201, message: "producto actualizado correctamente."})

    }catch(error){
        res.status(500).json({code: 500, message: "Error al actualizar el producto."})
    }
}