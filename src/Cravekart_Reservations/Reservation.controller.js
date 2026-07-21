const ReservationSchema = require("./Reservation.model");

const AddReservation = async (req, res) => {

    console.log(req.body);
    try {
        const { reservationName, date, time, guest } = req.body

        const save = await ReservationSchema.create({
            reservationName, date, time, guest
        })

        return res.json({
            message: " Reservation Added Successfully! ",
            data: save
        })



    } catch (error) {
        console.log(error);
    }
}


const GetReservation = async (req, res) => {

    try {
        const get = await ReservationSchema.find();

        return res.json({
            message: " Reservation Fetched Successfully! ",
            data: get
        })
    } catch (error) {
        console.log(error);

    }

}


const UpdateReservation = async (req, res) => {

    await ReservationSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({
        message: "Updated Successfully!"
    })

}


const DeleteReservation = async (req, res) => {

    await ReservationSchema.findByIdAndDelete(req.params.id)

    res.json({
        message: "Deleted Successfully!"
    })

}


module.exports = {
    AddReservation,
    GetReservation,
    UpdateReservation,
    DeleteReservation
}

