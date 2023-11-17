const Brand = require('../models/brand.model');

const getBrands = async (req, res, next) => {
    try{
        const brands = await Brand.find().populate('products');
        // const brands = await Brand.find().select('products', 'suppliers');

        res.status(200).json({
            status: "success",
            msg: "Brands found",
            data: brands
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const getBrand = async (req, res) => {
    try{
        const brand = await Brand.findById(req.params.id);
        if (!brand) {
            return res.status(404).json({
                status: 'fail',
                message: 'Brand not found'
            })
        }
        res.status(200).json({
            status: "success",
            msg: "Brand found",
            data: brand
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const postBrand = async (req, res, next) => {
    try{
        const brand = new Brand(req.body);
        const result = await brand.save();
        res.status(201).json({
            status: "success",
            msg: "Brand created",
            data: result
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const updateBrand = async (req, res, next) => {
    try{
        const brand = await Brand.findById(req.params.id);
        if (brand) {
            const updatedBrand = await Brand.updateOne({_id: req.params.id},
                {$set: req.body},
                {runValidators: true});
            res.status(200).json({
                msg: "Brand Updated Successfully",
                status: "success",
                data: updatedBrand

            });
        } else {
            res.status(404).json({
                status: 'fail',
                msg: "Brand not found"
            })
        }
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getBrands,
    getBrand,
    postBrand,
    updateBrand
}