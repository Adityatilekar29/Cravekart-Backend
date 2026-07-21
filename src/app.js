const express = require("express");

const ConnectionDB = require("./db/db")

const cors = require("cors")
const FoodRoutes = require("./Cravekart_Menu_Items/Menu.route")
const CategoryRoutes = require("./Cravekart_Categories/Category.route")
const ReservationRoutes = require("./Cravekart_Reservations/Reservation.route")
const app = express()

app.use(express.json());

app.use(cors())

ConnectionDB()

app.use("/", FoodRoutes)
app.use("/", CategoryRoutes)
app.use("/", ReservationRoutes)

module.exports = app
