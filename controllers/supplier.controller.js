const Supplier = require("../models/supplier.model");

const getSuppliers = async (req, res, next) => {
    try{
        const suppliers = await Supplier.find();
        res.status(200).json({
            status: "success",
            msg: "Suppliers found",
            data: suppliers
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const getSupplier = async (req, res, next) => {
    try{
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({
                status: 'fail',
                message: 'Supplier not found'
            })
        }
        res.status(200).json({
            status: "success",
            msg: "Supplier found",
            data: supplier
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const createSupplier = async (req, res, next) => {
    try{
        const supplier = new Supplier(req.body);
        const result = await supplier.save();
        res.status(201).json({
            status: "success",
            msg: "Supplier created",
            data: result
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const updateSupplier = async (req, res, next) => {
    try{
        const supplier = await Supplier.findById(req.params.id);
        if (supplier) {
            const updatedSupplier = await Supplier.updateOne({_id: req.params.id},
                {$set: req.body},
                {runValidators: true});
            res.status(200).json({
                status: "success",
                msg: "Supplier updated"
            });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const deleteSupplier = async (req, res, next) => {
    try{
        const supplier = await Supplier.findById(req.params.id);
        if (supplier) {
            await supplier.remove();
            res.status(200).json({
                status: "success",
                msg: "Supplier deleted",
            });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getSuppliers,
    getSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier
}