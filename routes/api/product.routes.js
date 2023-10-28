const { postProduct } = require("../../controllers/product.controller");

const productRoutes = require("express").Router();

productRoutes.post('/', postProduct)

module.exports = productRoutes;
