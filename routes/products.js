const express = require('express');
//almacena las rutas que voy a exportar, y se van a importar en el index.js
//router = viene de express.router
const router = express.Router();

const {
    postProduct,
    getProducts,
    getProductById,
    patchProductById,
    deleteProductById
} = require('../controllers/products');

//CONTROLADORES
router.post('/product', postProduct);
//get para todos los productos
router.get('/products', getProducts);

//get para 1 solo producto
router.get('/product/:id', getProductById);
router.patch('/product/:id', patchProductById);
router.delete('/product/:id', deleteProductById);

module.exports = router;