const express = require("express");
const ReservationController = require("./Reservation.controller")

const router = express.Router();
router.get('/reservation/index', ReservationController.index)
router.post('/reservation/store', ReservationController.store)
router.get('/reservation/show/:id', ReservationController.show)
router.put('/reservation/update', ReservationController.updated)
router.delete('/reservation/delete/:id', ReservationController.deleted)


module.exports = router