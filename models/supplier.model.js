const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;
const validator = require('validator');

const supplierSchema = new Schema({
    name: {
        type: String,
        required: [true, "Supplier name is required"],
        trim: true,
        maxlength: 100,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Supplier email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [ validator.isEmail, 'Invalid email']
    },
    phone : {
        type: String,
        required: [true, "Supplier phone is required"],
        trim: true,
        unique: true,
        validate: [ validator.isMobilePhone, 'Invalid phone number']
    },
    address : String,
    brand : {
        name: {
            type: String,
            trim: true,
            lowercase: true
        },
        id: {
            type: ObjectId,
            ref: 'Brand'
        }
    },
    status: {
        type: String,
        enum: ['active', 'in-active'],
        default: 'active'
    },
    imageURL: {
        type: String,
        validate: [ validator.isURL, 'Invalid URL'],
    },
},{ timestamps: true });

const Supplier = model('Supplier', supplierSchema);
module.exports = Supplier;
