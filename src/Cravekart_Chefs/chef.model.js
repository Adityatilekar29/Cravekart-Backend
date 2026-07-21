const mongoose = require("mongoose");

const ChefSchema = mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
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
    specialty: {
        type: String,
    },
    profile_image: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    experience_years: {
        type: Number,
    },
    is_active: {
        type: Boolean,
        default: true
    },
    shift_timing: {
        type: String
    },
    rating: {
        type: String
    },
    total_orders_prepared: {
        type: Number
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("chef", ChefSchema)