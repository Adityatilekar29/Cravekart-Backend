const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password_hash: {
        type: String,
        required: true
    },

    full_name: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['super admin', 'restaurant manager', 'order manager', 'support'],
        default: 'super admin'
    },

    profile_image: {
        type: String,
        required: true
    },
    last_login: {
        type: Date,
        default: Date.now
    },

    is_active: {
        type: Boolean,
        default: true
    },

    two_factor_enabled: {
        type: true
    }
},
    {

        timestamps: true
    })

const AdminModel = module.exports = mongoose.model("admin", AdminSchema)

module.exports = AdminModel