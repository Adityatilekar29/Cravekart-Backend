const express = require("express")
const { FoodPost, FoodGet } = require("../controllers/Food.controller")
const FoodController = require("../controllers/Food.controller")
const router = express.Router()

router.post("/add/food", FoodController.FoodPost)
router.get("/food", FoodController.FoodGet);
router.put("/food/:id", FoodController.FoodUpdate)
router.delete("/food/:id", FoodController.FoodDelete)

module.exports = router 