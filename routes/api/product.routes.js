const { postProduct, getProducts, getProduct, } = require("../../controllers/product.controller");

const productRoutes = require("express").Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);
productRoutes.post('/', postProduct)

module.exports = productRoutes;
