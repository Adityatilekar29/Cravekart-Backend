const express = require("express");
const ReservationController = require("../controllers/Reservation.controller")

const route = express.Router();

route.post("/add/reservation", ReservationController.AddReservation)
route.get("/get/reservation", ReservationController.GetReservation)
route.put("/update/reservation/:id", ReservationController.UpdateReservation)
route.delete("/delete/reservation/:id", ReservationController.DeleteReservation)


module.exports = route