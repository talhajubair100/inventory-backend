
// const productRoutes = require("./api/product.routes");
const brandRoutes = require("./api/brand.routes");
const categoryRoutes = require("./api/category.routes");
const productRoutes = require("./api/product.routes");
const storeRoutes = require("./api/store.routes");
const supplierRoutes = require("./api/supplier.routes");

const apiRouters = require("express").Router();

apiRouters.use("/products", productRoutes);
apiRouters.use("/brand", brandRoutes);
apiRouters.use("/category", categoryRoutes);
apiRouters.use("/supplier", supplierRoutes)
apiRouters.use("/store", storeRoutes)



module.exports = apiRouters;
