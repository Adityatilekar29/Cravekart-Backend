const express = require("express");
const ConnectionDB = require("./db/db")
const cors = require("cors")
const FoodRoutes = require("./Products/Routes/Food.route")
const CategoryRoutes = require("./Categories/routes/Category.route")
const app = express()

app.use(express.json());

app.use(cors())
ConnectionDB()

app.use("/", FoodRoutes)
app.use("/", CategoryRoutes)

module.exports = app
