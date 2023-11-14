const Store = require("../models/store.model");

const getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();
        res.status(200).json({
            success: true,
            data: stores
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const getStore = async (req, res, next) => {
    try {
        const store = await Store.findById(req.params.id);
        if(!store){
            return res.status(404).json({
                success: false,
                message: 'Store not found'
            });
        }
        res.status(200).json({
            success: true,
            data: store
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const createStore = async (req, res, next) => {
    try {
        const store = new Store(req.body);
        const createStore = await store.save();

        res.status(201).json({
            success: true,
            msg: 'Store saved successfully',
            data: createStore
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const updateStore = async (req, res, next) => {
    try {
        const store = await Store.findById(req.params.id);
        if (store){
            const updateStore = await Store.updateOne({
                _id: req.params.id
            }, {
                $set: req.body
            },{
                runValidators: true
            });
            res.status(200).json({
                success: true,
                msg: 'Store updated successfully',
               
            });
        }
        else{
            return res.status(404).json({
                success: false,
                message: 'Store not found'
            });
        }
    }catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const deleteStore = async (req, res, next) => {
    try {
        const store = await Store.findById(req.params.id);
        if (store){
            await store.remove();
            res.status(200).json({
                success: true,
                msg: 'Store deleted successfully',
               
            });
        }
        else{
            return res.status(404).json({
                success: false,
                message: 'Store not found'
            });
        }
    }catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

module.exports = {
    getStores,
    getStore,
    createStore,
    updateStore,
    deleteStore
}