const { Schema, model } = require('mongoose');
const validator = require('validator');
const { ObjectId } = Schema.Types

const stockSchema = new Schema({
    productID :{
        type: ObjectId,
        ref: 'Product',
        required: [true, "Product ID is required"],
    },
    name : {
        type: String,
        required: [true, "Stock name is required"],
        trim: true,
        lowercase: true,
        maxlength: [100, "stock name can not be more than 100 characters"]
    },
    description: String,
    image : {
        type: String,
        validate: [ validator.isURL, 'Invalid URL'],
    },
    price : {
        type: Number,
        required: [true, "Stock price is required"],
        min: [0, "Stock price can not be negative"],
    },
    quantity : {
        type: Number,
        required: [true, "Stock quantity is required"],
        min: [0, "Stock quantity can not be negative"],
    },
    category : {
        type: String,
        required: [true, "Stock category is required"],
    },
    brand : {
        name : {
            type: String,
            required: [true, "Stock brand is required"],
        },
        id:{
            type: ObjectId,
            ref: "Brand",
            required: [true, "Stock brand is required"],
        }
    },
    status: {
        type: String,
        enum: ['in-stock', 'out-of-stock', 'unavailable'],
        default: 'active'
    },
    store: {
        name: {
            type: String,
            required: [true, 'Store name is required'],
            trim: true,
            lowercase: true,
            enum: {
                values: ['dhaka', 'chattogram', 'khulna', 'rajshahi', 'sylhet', 'barishal', 'rangpur', 'other'],
                message: 'Please select correct store'
            }
        },
        id: {
            type: ObjectId,
            ref: 'Store',
            required: [true, 'Store id is required']
        }
    },
    supplier: {
        name: {
            type: String,
            required: [true, 'Supplier name is required'],
            trim: true,
        },
        phone: String,
        email: {
            type: String,
            validate: [validator.isEmail, 'Invalid email']
        },
        id: {
            type: ObjectId,
            ref: 'Supplier'
        }
    },
    sellCount: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const Stock = model('Stock', stockSchema);

module.exports = Stock;