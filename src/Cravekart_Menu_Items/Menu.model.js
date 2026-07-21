const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({

    categoryId: {
        type: Number,
        // required: true
    },
    category: {
        type: String,
    },
    foodName: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true,
        default: 0
    },
    stock: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    slug: {
        type: String,
    },

    short_description: {
        type: String,
    },

    compare_price: {
        type: String,
        default: 0
    },
    cost: {
        type: String,
        // required: true
    },

    sku: {
        type: String
    },

    is_vegetarian: {
        type: Boolean,
        default: true
    },

    is_spicy: {
        type: Boolean,
        default: true
    },

    is_seasonal: {
        type: Boolean,
        default: true
    },

    preparation_time: {
        type: Number,
        default: 0
    },

    calories: {
        type: Number,
        default: 0
    },

    ingredients: {
        type: Object
    },
    allergens: {
        type: Object,
    },

    is_active: {
        type: Boolean,
        default: true
    },
    is_featured: {
        type: Boolean,
        default: true
    },

    main_image: {
        type: String,
    },

    gallery_images: {
        type: Object,
    },
    meta_title: {
        type: String
    },

    meta_description: {
        type: String
    },

}, {
    timestamps: true
});

module.exports = mongoose.model("menuitem", MenuItemSchema);