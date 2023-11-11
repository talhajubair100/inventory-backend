const { Schema, model } = require("mongoose");
const validator = require("validator");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        unique: true,
        lowercase: true,
        maxlength: [100, "product name can not be more than 100 characters"]
    },
    image: {
        type: String,
        validate: [ validator.isURL, 'Invalid URL'],
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    },
    unit: {
        type: String,
        required: [true, "Product unit is required"],
        enum: {
            values: ["kg", "g", "liter", "ml", "pcs", 'bag', 'box', 'bottle', 'can', 'carton', 'dozen', 'pack', 'other'],
            message: "Please select correct unit for product"
        }
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
    },
    brand: {
        name: {
            type: String,
            required: [true, "Product brand is required"],
        },
        id:{
            type: ObjectId,
            ref: "Brand",
            required: [true, "Product brand is required"],
        }
    }
}, { timestamps: true })

// productSchema.pre("save", function (next) {
//     if (this.quantity == 0) {
//         this.status = "out-of-stock";
//     }
//     next();
// });



const Product = model("Product", productSchema);

module.exports = Product;
