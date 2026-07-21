const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

    categoryName: {
        type: String,
        required: true
    },

    categoryImage: {
        type: String,
    },
    stock: {
        type: String,
        enum: ["Available", "Out Of Stock"],
        default: "Available"
    },
    description: {
        type: String,
    },

    isActive: {
        type: String,
        default: true
    },

    icon: {
        type: String
    },

    slug: {
        type: String,
    },
    parent_id: {
        type: Number
    },

    is_featured: {
        type: Boolean,
        default: true
    },

    is_active: {
        type: Boolean,
        default: true
    },

    sort_order: {
        type: Number
    }

},

    {
        timestamps: true
    })

module.exports = mongoose.model("category", CategorySchema);
