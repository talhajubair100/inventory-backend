const { postProduct, getProducts, getProduct, updateProduct, } = require("../../controllers/product.controller");

const productRoutes = require("express").Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);
productRoutes.post('/', postProduct)
productRoutes.patch('/:id', updateProduct)

module.exports = productRoutes;
