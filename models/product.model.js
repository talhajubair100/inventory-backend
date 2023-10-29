const { Schema, model } = require("mongoose");
const validator = require("validator");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxlength: [100, "product name can not be more than 100 characters"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Product price can not be less than 0"]
    },
    unit: {
        type: String,
        required: [true, "Product unit is required"],
        enum: {
            values: ["kg", "g", "liter", "ml", "pcs", 'bag', 'box', 'bottle', 'can', 'carton', 'dozen', 'pack', 'other'],
            message: "Please select correct unit for product"
        }
    },
    quantity: {
        type: Number,
        required: [true, "Product quantity is required"],
        min: [0, "Product quantity can not be less than 0"],
        validate : {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value"
        }
    },
    status: {
        type: String,
        required: [true, "Product status is required"],
        enum: {
            values: ["active", "inactive", "in-stock", "out-of-stock"],
            message: "Please select correct status for product"
        }
    },

    
}, { timestamps: true })

productSchema.pre("save", function (next) {
    if (this.quantity == 0) {
        this.status = "out-of-stock";
    }
    next();
});



const Product = model("Product", productSchema);

module.exports = Product;
