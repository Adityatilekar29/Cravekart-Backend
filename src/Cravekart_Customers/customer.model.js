const { json } = require("express");
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address_line1: {
        type: String,
        required: true
    },
    address_line2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    is_verified: {
        type: Boolean,
        default: false
    },

    is_active: {
        type: Boolean,
        default: true
    },

    loyalty_points: {
        type: Number,
        default: 0
    },

    total_orders: {
        type: Number,
        default: 0
    },
    preferences: {
        type: json,
        required: true
    }

},
    {
        timestamps: true
    });

module.exports = mongoose.model("customer", CustomerSchema);

