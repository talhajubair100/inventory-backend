const Category = require("../models/category.model");

const getCategories = async (req, res, next) => {
    try{
        const categories = await Category.find().populate('products');
        res.status(200).json({
            status: "success",
            msg: "Categories found",
            data: categories
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const getCategory = async (req, res, next) => {
    try{
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            })
        }
        res.status(200).json({
            status: "success",
            msg: "Category found",
            data: category
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const postCategory = async (req, res, next) => {
    try{
        const category = new Category(req.body);
        const result = await category.save();
        res.status(201).json({
            status: "success",
            msg: "Category created",
            result
        });
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

const updateCategory = async (req, res, next) => {
    try{
        const category = await Category.findById(req.params.id);
        if (category) {
            const updatedCategory = await Category.updateOne({_id: req.params.id},
                {$set: req.body},
                {runValidators: true});
            res.status(200).json({
                status: "success",
                msg: "Category updated",
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            })
        }
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getCategories,
    getCategory,
    postCategory,
    updateCategory
}