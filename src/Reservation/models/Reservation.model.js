const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({

    ReservationName: {
        type: String,
        required: true
    },

    Date: {
        type: String,
        required: true
    },

    Time: {
        type: String,
        required: true
    },

    Guest: {
        type: Number,
        required: true
    }
})

const ReservationModel = module.exports = mongoose.model("Reservation", ReservationSchema);

module.exports = ReservationModel