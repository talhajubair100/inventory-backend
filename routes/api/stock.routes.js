const { getStocks, createStocks, updateStock, deleteStock, getStock } = require("../../controllers/stock.controller");

const stockRoutes = require("express").Router();

stockRoutes.get('/', getStocks);
stockRoutes.get('/:id', getStock);
stockRoutes.post('/', createStocks);
// stockRoutes.patch("/bulk-update", bulkUpdateProduct)
// stockRoutes.delete("/bulk-delete", bulkDeleteProduct)
stockRoutes.patch('/:id', updateStock);
stockRoutes.delete('/:id', deleteStock);

module.exports = stockRoutes;
