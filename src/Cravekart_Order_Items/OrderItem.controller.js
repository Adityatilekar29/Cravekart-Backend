const OrderItemModel = require("./OrderItem.model");

const index = (req, res) => {
    return res.json('i am index function')
}

const store = (req, res) => {

    try {

        const {
            Order_id,
            item_id,
            variant_id,
            quantity,
            unit_price,
            variant_price,
            subtotal,
            special_instructions,
            addons_applied,
        } = req.body

        return res.json({
            message: "Data Created successfully!",
            Data: {
                Order_id,
                item_id,
                variant_id,
                quantity,
                unit_price,
                variant_price,
                subtotal,
                special_instructions,
                addons_applied,
            }
        })

    } catch (error) {
        console.log(error);

        return res.json({
            message: "Internal Server Error!"
        })
    }
}

const show = (req, res) => {
    try {
        const { id } = req.params;

        return res.json({
            message: "Reqest Accepted Successfully!",
            id
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })

    }
}

const updated = (req, res) => {
    try {

        const {
            Order_id,
            item_id,
            variant_id,
            quantity,
            unit_price,
            variant_price,
            subtotal,
            special_instructions,
            addons_applied,
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                Order_id,
                item_id,
                variant_id,
                quantity,
                unit_price,
                variant_price,
                subtotal,
                special_instructions,
                addons_applied,
            }
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })
    }
}

const deleted = (req, res) => {
    try {
        const { id } = req.params;

        return res.json({
            message: "Reqest Deleted Successfully!",
            id
        })

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })

    }
}

module.exports = {
    index,
    store,
    show,
    updated,
    deleted
}