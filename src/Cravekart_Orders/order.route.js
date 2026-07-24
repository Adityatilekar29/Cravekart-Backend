const express = require("express")
const OrderController = require("./order.controller")
const router = express.Router();

router.get('/order/list', OrderController.index)
router.post('/order/store', OrderController.store)
router.get('/order/show/:id', OrderController.show)
router.put('/order/update', OrderController.updated)
router.delete('/order/delete/:id', OrderController.deleted)

module.exports = router