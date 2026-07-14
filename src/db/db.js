const mongoose = require("mongoose");

const ConnectionDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Food")
        console.log("Database Connection Successfully ");

    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectionDB