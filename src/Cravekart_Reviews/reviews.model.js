const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({

    customer_id: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    food_rating: {
        type: Number
    },
    delivery_rating: {
        type: Number
    },
    title: {
        type: String
    },
    review_text: {
        type: String
    },
    images: {
        type: JSON
    },
    is_verified: {
        type: Boolean,
        default: true
    },
    is_approved: {
        type: Boolean,
        default: false
    },
    helpful_count: {
        type: Number
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("reviews", ReviewsSchema)