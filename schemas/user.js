const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    age: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    mobile: {
        type: String,
        required: true,
    },
    addressList: {
        type: Array,
        required: true,
    },
    orderIdList: {
        type: Array,
        required: true,
    },
    savedPaymentList: {
        type: Array,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});
module.exports = {UserSchema};
