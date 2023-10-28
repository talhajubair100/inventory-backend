const productRoutes = require("./product.routes");

const apiRouters = require("express").Router();

apiRouters.use("/products", productRoutes);

module.exports = apiRouters;
