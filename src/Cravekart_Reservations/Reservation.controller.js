const ReservationModel = require("./Reservation.model");

const index = (req, res) => {
    return res.json('i am index function')
}

const store = (req, res) => {

    try {

        const {
            customer_id,
            reservationName,
            date,
            guest,
            reservation_date,
            reservation_time,
            end_time,
            number_of_guests,
            table_number,
            section,
            special_requests,
            status,
            contact_phone,
            is_recurring,
        } = req.body

        return res.json({
            message: "Data Created successfully!",
            Data: {
                customer_id,
                reservationName,
                date,
                guest,
                reservation_date,
                reservation_time,
                end_time,
                number_of_guests,
                table_number,
                section,
                special_requests,
                status,
                contact_phone,
                is_recurring,
            }
        })

    } catch (error) {
        console.log(error);

        return res.json({
            message: "Internal Server Error!"
        })
    }
}

const show = (req, res) => {
    try {
        const { id } = req.params;

        return res.json({
            message: "Reqest Accepted Successfully!",
            id
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })

    }
}

const updated = (req, res) => {
    try {

        const {
            customer_id,
            reservationName,
            date,
            guest,
            reservation_date,
            reservation_time,
            end_time,
            number_of_guests,
            table_number,
            section,
            special_requests,
            status,
            contact_phone,
            is_recurring,
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                customer_id,
                reservationName,
                date,
                guest,
                reservation_date,
                reservation_time,
                end_time,
                number_of_guests,
                table_number,
                section,
                special_requests,
                status,
                contact_phone,
                is_recurring,
            }
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })
    }
}

const deleted = (req, res) => {
    try {
        const { id } = req.params;

        return res.json({
            message: "Reqest Deleted Successfully!",
            id
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })

    }
}

module.exports = {
    index,
    store,
    show,
    updated,
    deleted
}