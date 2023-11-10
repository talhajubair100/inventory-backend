const { Schema, model } = require("mongoose");
const validator = require('validator');
const { ObjectId } = Schema.Types

const brandSchema = new Schema({
    name: {
        type: String,
        required: [true, "Brand name is required"],
        trim: true,
        maxlength: [100, "brand name can not be more than 100 characters"],
        unique: true,
        lowercase: true
    },
    description: String,
    image: {
        type: String,
        validate: [ validator.isURL, 'Invalid URL'],
    },   
    products: [{
        type: ObjectId,
        ref: 'Product'
    }],
    suppliers: [{
        name: String,
        phone: String,
        email: String,
        id: {
            type: ObjectId,
            ref: 'Supplier'
        
        }
    }],
    status: {
        type: String,
        enum: ['active', 'in-active'],
        default: 'active'
    },

}, { timestamps: true });

const Brand = model("Brand", brandSchema);

module.exports = Brand;