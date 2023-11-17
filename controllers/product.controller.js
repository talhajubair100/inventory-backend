const Brand = require("../models/brand.model");
const Product = require("../models/product.model");


const getProducts = (async (req, res, next) => {
    try {
        const products = await Product.find()
        // projections 
        // const products = await Product.find({},  'name quality price')
        // const products = await Product.find({},  '-name -quality -price')
        // const products = await Product.find({}).limit(5)
        // const products = await Product.find({}).skip(5).limit(5)
        // const products = await Product.find({}).sort({name: 1})

        // mongose projections
        // const products = await Product.where({status: 'active'})
        res.status(200).json({
            status: "success",
            msg: "Products found",
            data: products
        });
    } catch (error) {
        message: "Products not found"
        res.status(500).json({ error: error.message })
    }
})

const getProduct = (async (req, res) => {
    try {
        // const product = await Product.find({
        //     _id: req.params.id,
        // })

        const product = await Product.findById(req.params.id)

        res.status(200).json({
            status: "success",
            msg: "Products found",
            product
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


const postProduct = (async (req, res, next) => {
    try {
        const product = new Product(req.body)


        const { _id: productID, brand } = product

        await Brand.updateOne(
            { _id: brand.id },
            { $push: { products: productID } }
        );

        // await Category.updateOne(
        //     { _id: categories.id },
        //     { $push: { products: _id } }
        // );


        // if(product.quantity == 0){
        //     product.status = 'out-of-stock'
        // }
        const createdProduct = await product.save()
        res.status(201).json(createdProduct);


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

const updateProduct = (async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await Product.updateOne({ _id : id}, {$set: req.body}, { runValidators: true })
        res.status(200).json({
            status: "success",
            msg: "Products updated",
            data: result
        });

    }
    catch (error) {
        message: "Products can not be updated"
        res.status(500).json({ error: error.message })
    }
})

const bulkUpdateProduct = (async (req, res, next) => {
    try{
        
        const updatedProducts = await Product.updateMany( { _id: req.body.ids }, { $set: req.body.data }, {runValidators : true});
        res.status(200).json({
            status: "success",
            msg: "Products updated",
            data: updatedProducts
        });

    }
    catch (error) {
        message: "Products can not be updated"
        res.status(500).json({ error: error.message })
    }
})

const deleteProduct = (async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await Product.deleteOne({ _id : id})
        res.status(200).json({
            status: "success",
            msg: "Products deleted",
            data: result
        });

    }
    catch (error) {
        message: "Products can not be deleted"
        res.status(500).json({ error: error.message })
    }
})

const bulkDeleteProduct = (async (req, res, next) => {
    try{
        
        const deleteProducts = await Product.deleteMany( { _id: req.body.ids });
        res.status(200).json({
            status: "success",
            msg: "Products deleted successfully",
            data: deleteProducts
        });

    }
    catch (error) {
        message: "Products can not be deleted"
        res.status(500).json({ error: error.message })
    }
})



module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    bulkUpdateProduct,
    deleteProduct,
    bulkDeleteProduct
}