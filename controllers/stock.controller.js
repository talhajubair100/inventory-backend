const Stock = require("../models/stock.model");

const getStocks = (async (req, res, next) => {
    try {
        // let filters = { ...req.query };
        // const excludedFields = ['page', 'sort', 'limit', 'fields'];
        // excludedFields.forEach(el => delete filters[el]);

        // let filterStr = JSON.stringify(filters);
        // filterStr = filterStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        // filters = JSON.parse(filterStr);

        const stocks = await Stock.find();
        res.status(200).json({
            success: true,
            msg: 'Stocks found',
            data: stocks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
})

const getStock = (async (req, res, next) => {
    try {
        const stock = await Stock.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: 'Stock found',
            data: stock
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
})

const createStocks = (async (req, res, next) => {
    try {
        const stock = await Stock.create(req.body);
        res.status(201).json({
            success: true,
            msg: 'Stock created',
            data: stock
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
})

const updateStock = (async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await Stock.updateOne({ _id : id}, {$set: req.body}, { runValidators: true })
        res.status(200).json({
            status: "success",
            msg: "Stock updated",
            data: result
        });

    }
    catch (error) {
        message: "Stock can not be updated"
        res.status(500).json({ error: error.message })
    }

})

const deleteStock = (async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await Stock.deleteOne({ _id : id})
        res.status(200).json({
            status: "success",
            msg: "Stock deleted",
            data: result
        });
    }   
    catch (error) {
        message: "Stock can not be deleted"
        res.status(500).json({ error: error.message })
    }
})


module.exports = {
    getStocks,
    getStock,
    createStocks,
    updateStock,
    deleteStock,
}