const ReservationModel = require("./Reservation.model");

const index = async (req, res) => {
    const list = await ReservationModel.find()
    return res.json(list)
}

const store = async (req, res) => {

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


        const save = await ReservationModel.create({
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
        })

        if (!save) {
            return res.json({
                message: "sometthing went wrong!"
            })
        }

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

const show = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ReservationModel.findById(id)
        return res.json({
            message: "Reqest Accepted Successfully!",
            data
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

const deleted = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ReservationModel.findById({ _id: id })
        return res.json({
            message: "Reqest Deleted Successfully!",
            data
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