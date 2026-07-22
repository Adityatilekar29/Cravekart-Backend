const express = require("express");

const ConnectionDB = require("./db/db")

const cors = require("cors")

const MenuRoutes = require("./Cravekart_Menu_Items/Menu.route")
const AdminRoutes = require("./Cravekart_Admin/admin.route")
const CategoryRoutes = require("./Cravekart_Categories/Category.route")
const ChefRoutes = require("./Cravekart_Chefs/chef.route")
const ContactRoutes = require("./Cravekart_Contact_Messages/contact.route")
const CustomerRoutes = require("./Cravekart_Customers/customer.route")
const OrderItemRoutes = require("./Cravekart_Order_Items/OrderItem.route")
const OrderRoutes = require("./Cravekart_Orders/order.route")
const ReservationRoutes = require("./Cravekart_Reservations/Reservation.route")
const ReviewsRoutes = require("./Cravekart_Reviews/reviews.route")
const app = express()

app.use(express.json());

app.use(cors())

ConnectionDB()

app.use("/api", MenuRoutes)
app.use("/api", AdminRoutes)
app.use("/api", CategoryRoutes)
app.use("/api", ChefRoutes)
app.use("/api", ContactRoutes)
app.use("/api", CustomerRoutes)
app.use("/api", OrderItemRoutes)
app.use("/api", OrderRoutes)
app.use("/api", ReservationRoutes)
app.use("/api", ReviewsRoutes)


module.exports = app
