const express = require('express');
const http = require('http');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const {sequelize} = require('./database/database');
const app = express();

const { PORT } = process.env;

//Routes
const productRoutes = require('./routes/products.route');

//Middlewares
app.use(express.json())
app.use(morgan('dev'));
app.use(helmet(''));
app.use(compression(''));
app.use(cors(''));

//Routes
//este prefijo se va a poner en cada una de las rutas que se creen
const prefix = "/api/v1";
app.use(prefix,productRoutes);

//metodo para responder: res.send
//app de origen, carga por defecto la API cuando no tiene ruta alguna
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my first API</h1>")
});

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`El Servidor esta en el puerto ${PORT}`);
    sequelize
    .sync()
    .then(() => console.log('Conectados a la base de datos'))
    .catch((error) => console.log(error));
});