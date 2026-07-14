const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({

    CategoryName: {
        type: String,
        required: true
    },

    CategoryImage: {
        type: String,
        required: false
    },

    Stock: {
        type: String,
        required: true
    }
})

const CategoryModel = module.exports = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;