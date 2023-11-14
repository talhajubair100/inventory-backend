const { getStores, getStore, createStore, updateStore, deleteStore } = require("../../controllers/store.controller");

const storeRoutes = require("express").Router();

storeRoutes.get('/', getStores);
storeRoutes.get('/:id', getStore);
storeRoutes.post('/', createStore);
storeRoutes.patch('/:id', updateStore);
storeRoutes.delete('/:id', deleteStore);

module.exports = storeRoutes;