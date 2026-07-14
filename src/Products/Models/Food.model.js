const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    FoodName: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Stock: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        default: ""
    },
    Rating: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});

const FoodModel = module.exports = mongoose.model("Food", FoodSchema);

module.exports = FoodModel 