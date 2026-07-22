const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    image_url: {
        type: String,
    },
    description: {
        type: String,
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
