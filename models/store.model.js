const { Schema, model } = require("mongoose");
const validator = require('validator');
const { ObjectId } = Schema.Types

const storeSchema = new Schema({
    name: {
        type: String,
        required: [true, "Store name is required"],
        trim: true,
        unique: true,
        enum: {
            values: ['dhaka', 'chattogram', 'khulna', 'rajshahi', 'sylhet', 'barishal', 'rangpur', 'other'],
            message: 'Please select correct store'
        }
    },
    description: String,
    phone: String,
    address: String,
    products: [{
        type: ObjectId,
        ref: 'Product'
    }],
    status: {
        type: String,
        enum: ['active', 'in-active'],
        default: 'active'
    },
    manager: {
        name: String,
        phone: String,
        email: String,
        id: {
            type: ObjectId,
            ref: 'User'
        }
    }

},{ timestamps: true })

const Store = model("Store", storeSchema);
module.exports = Store;