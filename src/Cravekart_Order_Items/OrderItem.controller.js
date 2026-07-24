const OrderItemModel = require("./OrderItem.model");

const index = async (req, res) => {

    const list = await OrderItemModel.find();

    return res.json(list)
}

const store = async (req, res) => {

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

        const save = await OrderItemModel.create({
            Order_id,
            item_id,
            variant_id,
            quantity,
            unit_price,
            variant_price,
            subtotal,
            special_instructions,
            addons_applied,
        })

        if (!save) {
            return res.json({
                message: "sometthing went wrong!"
            })
        }

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

const show = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await OrderItemModel.findById(id)

        return res.json({
            message: "Reqest Accepted Successfully!",
            data
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

const deleted = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await OrderItemModel.deleteOne({ _id: id })

        return res.json({
            message: "Reqest Deleted Successfully!",
            data
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