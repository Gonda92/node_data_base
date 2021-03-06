const ProductModel = require("../models/products.model");

const postProduct = async (req, res) => {
  const productCreate = await ProductModel.create(
    {
      name: "Manzana",
    },
    {
      fields: ["name"], //este es el campo que defini dentro del modelo
    }
  );
  res.json('Creado');
};

const getProducts = async (req, res) => {
  await ProductModel.findAll()  //busca todo los registros de la tabla  
  res.json(products);
};

const getProductById = (req, res) => {};

const patchProductById = (req, res) => {};

const deleteProductById = (req, res) => {};

module.exports = {
  postProduct,
  getProducts,
  getProductById,
  patchProductById,
  deleteProductById,
};

//otro getProductsById, con parametro name

// const getProductById = (req, res) => {
//     const name = req.params.name;
//     const filteredProducts = db.filter((product) => product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
//     if(filteredProducts.length > 0){
//         res.status(200).json(filteredProducts)
//     } else {
//         res.status(404).json({
//             error: 'Producto no encontrado'
//         });
//     }
// }

//otro postProduct

// const postProduct = (req, res) =>{
//     const ids = db.map(product => product.id)
//     const id = Math.max(...ids) + 1;
//     db.push({
//         id: id,
//         name: req.body.name
//     })
//     res.status(201).json({
//         success: 'Producto creado con exito',
//         id,
//     })
// }
