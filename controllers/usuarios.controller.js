const { Usuario } = require('../models/');
const { sequelize, Sequelize } = require('../models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const privateKey = '1A2b3C4d';
const privateKeyAdmin = '1wf89Se7fWr7';


module.exports.buscaMail = async (req, res, next) => {
    try {
        let {emailRegistro}= req.body
        let email = await Usuario.findOne({
            where: {email: emailRegistro}
        });

        if(email == null) {
            next()
        } else {
            return res.status(400).json({code:400, message: 'Email está registrado. Debe proporcionar otro distinto'})
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({code:500, message: 'No fue posible finalizar proceso de registro'})
    }
}


module.exports.addUser = async (req, res) => {
    try {

        let {nombreRegistro, apellidoRegistro, emailRegistro, claveRegistro} = req.body;
        console.log(nombreRegistro, apellidoRegistro, emailRegistro, claveRegistro)

        const hashedPassword = await bcrypt.hash(claveRegistro, 10)

        let nuevoUsuario = await Usuario.create({
            nombre: nombreRegistro, 
            apellido: apellidoRegistro, 
            email: emailRegistro, 
            password: hashedPassword
        });

        res.status(201).json({code: 201, message: 'Usuario creado exitosamente'});
             
    } catch (error) {
        console.log(error)
        return res.status(500).json({code:500, message: 'No se pudo crear usuario correctamente'})
    }
}

module.exports.buscaUser = async (req, res, next) => {
    try {
        let {loginUsuario} = req.body
        let email = await Usuario.findOne({
            where: {email: loginUsuario}
        });
        if(email == null) {
            return res.status(401).json({code:401, message: 'Datos de autenticación no son correctos'})
        } else {
            next()
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({code:500, message: 'No fue posible finalizar proceso de autenticación'})
    }
}

module.exports.autenticador = async (req, res) => {
    try {
        let usuario = req.body.loginUsuario
        selectClase = await Usuario.findOne({
            raw: true,
            attributes: ['clase'],
            where: {email: usuario}
        });
        selectPassword = await Usuario.findOne({
            raw: true,
            attributes: ['password'],
            where: {email: usuario}
        });
        if(selectClase.clase == 'admin'){
            if(selectPassword.password == req.body.loginPassword){
                let tokenKeyAdmin
                jwt.sign({usuario}, privateKeyAdmin, (err, token) => {
                    if(err){
                        res.status(500).json({code: 500, message: "Error interno del servidor"})
                    }else{
                        tokenKeyAdmin = token;
                        res.status(200).json({code: 200, tokenAdmin: tokenKeyAdmin, usuario})
                    }
                })
            } else {
                return res.status(401).json({code:401, message: 'Datos de autenticación no son correctos'})
            }
        } else {
            if(await bcrypt.compare(req.body.loginPassword, selectPassword.password)) {
                let tokenKey
                jwt.sign({usuario}, privateKey, (err, token) => {
                    if(err){
                        res.status(500).json({code: 500, message: "Error interno del servidor"})
                    }else{
                        tokenKey = token;
                        res.status(200).json({code: 200, token: tokenKey, usuario})
                    }
                })
            } else {
                return res.status(401).json({code:401, message: 'Datos de autenticación no son correctos'})
            }
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({code:500, message: 'No fue posible finalizar proceso de autenticación'})
    }
}

module.exports.verificarToken = (req, res, next) => {

    let token;
    let tokenQuery = req.query.token;
    if(tokenQuery) token = tokenQuery;
    let tokenHeader = req.headers['authorization'];
    if(tokenHeader){
        tokenHeader = tokenHeader.split(" ");
        tokenHeader = tokenHeader[1];
        token = tokenHeader;
    }
    if(token){
        jwt.verify(token, privateKey, (error, data) => {
            if(error) return res.status(401).json({code:401, message:"Debes iniciar sesión para ejecutar esta acción"})
            req.usuario = data.usuario
            next();
        })
    }else{
        return res.status(401).json({code:401, message:"Debes iniciar sesión para ejecutar esta acción"})
    }
}


module.exports.verificarTokenAdmin = (req, res, next) => {

    let token;
    let tokenQuery = req.query.token;
    if(tokenQuery) token = tokenQuery;
    let tokenHeader = req.headers['authorization'];
    if(tokenHeader){
        tokenHeader = tokenHeader.split(" ");
        tokenHeader = tokenHeader[1];
        token = tokenHeader;
    }
    if(token){
        jwt.verify(token, privateKeyAdmin, (error, data) => {
            if(error) return res.status(401).json({code:401, message:"Debes iniciar sesión para ejecutar esta acción"})
            req.usuario = data.usuario
            next();
        })
    }else{
        return res.status(401).json({code:401, message:"Debes iniciar sesión para ejecutar esta acción"})
    }
}


