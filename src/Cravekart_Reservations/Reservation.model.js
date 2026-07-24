const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({

    customer_id: {
        type: String,
        required: true
    },

    reservationName: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true,
        default: Date.now
    },


    guest: {
        type: Number,
        required: true
    },
    reservation_date: {
        type: Date,
        required: true
    },

    reservation_time: {
        type: String,
        required: true
    },

    end_time: {
        type: String,
    },

    number_of_guests: {
        type: Number,
        required: true
    },

    table_number: {
        type: String,
    },

    section: {
        type: String
    },

    special_requests: {
        type: String
    },

    status: {
        type: String,
        enum: ['pending', 'confirmed', 'arrived', 'seated', 'completed', 'cancelled', 'no show'],
        default: 'pending '
    },

    contact_phone: {
        type: String
    },

    is_recurring: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Reservation", ReservationSchema);
