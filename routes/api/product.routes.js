const { postProduct, getProducts, getProduct, updateProduct, bulkUpdateProduct, deleteProduct, bulkDeleteProduct, fileUpload, } = require("../../controllers/product.controller");
const uploader = require("../../middleware/uploader");

const productRoutes = require("express").Router();


productRoutes.post("/file-upload", uploader.single("product_image"), fileUpload)
productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);
productRoutes.post('/', postProduct)
productRoutes.patch("/bulk-update", bulkUpdateProduct)
productRoutes.delete("/bulk-delete", bulkDeleteProduct)
productRoutes.patch('/:id', updateProduct)
productRoutes.delete("/:id", deleteProduct);


module.exports = productRoutes;
