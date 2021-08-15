//Sequelize en mayuscula va significa el modulo Sequilize
const Sequelize = require("sequelize");
//Sequelize en minuscula va significa la configuracion que hicimos para la conexion con el servicio que estamos trabajando Elephent SQL (con la tecnologia de Postgres)
const { sequelize } = require("../database/database");

//lleva 2 parametros: nombre de la tabla , un objeto
const ProductModel = sequelize.define('products', {
    name: {
        type: Sequelize.TEXT,   //es para decir el valor de name es de tipo texto
    }}, {
        timestamps: false 
        //fecha de creacion y edicion que el sistema te pone por defecto (se puede utilizar para dejar registo de cuando se hizo una operacion - si esta false: esto estara deshabilitado
    })

module.exports = ProductModel;
