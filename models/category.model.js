const { Schema, model } = require("mongoose");
const validator = require('validator');
const { ObjectId } = Schema.Types

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Category name is required"],
        trim: true,
        maxlength: [100, "category name can not be more than 100 characters"],
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
    status: {
        type: String,
        enum: ['active', 'in-active'],
        default: 'active'
    },
},{ timestamps: true })

const Category = model("Category", categorySchema);
module.exports = Category;
