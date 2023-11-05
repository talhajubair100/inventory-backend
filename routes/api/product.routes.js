const { postProduct, getProducts, getProduct, updateProduct, bulkUpdateProduct, deleteProduct, bulkDeleteProduct, } = require("../../controllers/product.controller");

const productRoutes = require("express").Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);
productRoutes.post('/', postProduct)
productRoutes.patch("/bulk-update", bulkUpdateProduct)
productRoutes.delete("/bulk-delete", bulkDeleteProduct)
productRoutes.patch('/:id', updateProduct)
productRoutes.delete("/:id", deleteProduct);


module.exports = productRoutes;
