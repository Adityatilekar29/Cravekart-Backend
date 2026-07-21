const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    customer_id: {
        type: String,
        required: true
    },

    order_number: {
        type: String,
        required: true
    },

    order_type: {
        type: String,
        enum: ['delivery', 'takeaway', 'dinein'],
        default: 'delivery'
    },
    order_date: {
        type: Date,
    },

    status: {
        type: String,
        enum: ['pending', 'confirmed', 'preparing', 'ready', 'out of delivery', 'delivered', 'cancelled', 'refunded'],
        default: 'delivery'
    },
    total_amount: {
        type: String
    },

    subtotal: {
        type: String
    },
    tax_amount: {
        type: String
    },
    discount_amount: {
        type: String
    },
    delivery_fee: {
        type: String
    },
    packaging_fee: {
        type: String
    },
    payment_method: {
        type: String,
        enum: ['cash', 'card', 'upi', 'wallet', 'online'],
        default: 'delivery'
    },
    payment_status: {
        type: String,
        enum: ['pending', 'paid', 'failed', 'refunded', 'online'],
        default: 'delivery'
    },

    transaction_id: {
        type: String
    },

    delivery_address: {
        type: String,
        required: true
    },
    delivery_instructions: {
        type: String
    },
    estimated_delivery_time: {
        type: Number,
        default: 30
    },
    estimated_delivery_time: {
        type: Number,
        default: 30
    },
    actual_delivery_time: {
        type: Number,
        default: 0
    },

    assigned_chef_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chef',
        required: true
    },

    assigned_delivery_partner: {
        type: String,
        required: true
    },

    special_instructions: {
        type: String
    },

    coupon_code: {
        type: String
    },

    loyalty_points_used: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("order", OrderSchema);