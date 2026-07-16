const ReservationModel = require("../models/Reservation.model");

const AddReservation = async (req, res) => {

    console.log(req.body);
    try {
        const { ReservationName, Date, Time, Guest } = req.body

        const save = await ReservationModel.create({
            ReservationName, Date, Time, Guest
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
        const get = await ReservationModel.find();

        return res.json({
            message: " Reservation Fetched Successfully! ",
            data: get
        })
    } catch (error) {
        console.log(error);

    }

}


const UpdateReservation = async (req, res) => {

    await ReservationModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({
        message: "Updated Successfully!"
    })

}


const DeleteReservation = async (req, res) => {

    await ReservationModel.findByIdAndDelete(req.params.id)

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

