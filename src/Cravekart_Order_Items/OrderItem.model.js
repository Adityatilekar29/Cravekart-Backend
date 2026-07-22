const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({

    Order_id: {
        type: Number
    },

    item_id: {
        type: Number
    },

    variant_id: {
        type: Number
    },

    quantity: {
        type: Number,
        default: 0
    },

    unit_price: {
        type: String
    },
    variant_price: {
        type: String
    },
    subtotal: {
        type: String
    },
    special_instructions: {
        type: String
    },
    addons_applied: {
        type: String
    },

}, {
    timestamps: true
})

module.exports = mongoose.model("orderitem", OrderItemSchema)