const Product = require("../models/product.model");


const postProduct = (async (req, res, next) => {
    try {
        const product = new Product(req.body)


        // const { _id, brand, categories } = product

        // await Brand.updateOne(
        //     { _id: brand.id },
        //     { $push: { products: _id } }
        // );

        // await Category.updateOne(
        //     { _id: categories.id },
        //     { $push: { products: _id } }
        // );
        if(product.quantity == 0){
            product.status = 'out-of-stock'
        }
        const createdProduct = await product.save()
        res.status(201).json(createdProduct);


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = {
    postProduct,
}