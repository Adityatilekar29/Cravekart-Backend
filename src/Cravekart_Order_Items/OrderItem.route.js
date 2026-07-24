const express = require("express")
const OrderItemController = require("./OrderItem.controller")
const router = express.Router();

router.get('/orderitem/list', OrderItemController.index)
router.post('/orderitem/store', OrderItemController.store)
router.get('/orderitem/show/:id', OrderItemController.show)
router.put('/orderitem/update', OrderItemController.updated)
router.delete('/orderitem/delete/:id', OrderItemController.deleted)

module.exports = router