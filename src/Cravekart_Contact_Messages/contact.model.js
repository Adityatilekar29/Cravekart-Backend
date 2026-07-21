const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({

    customer_id: {
        type: String,
        required: true
    },

    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['order', 'delivery', 'payment', 'feedback', 'complaint', 'general'],
        default: 'order'
    },
    message_text: {
        type: String
    },

    status: {
        type: String,
        enum: ['new', 'read', 'replied', 'resolved', 'closed'],
        default: 'new'
    },
    assigned_to: {
        type: Number
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'new'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("contact", ContactSchema)