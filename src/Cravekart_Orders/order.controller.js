const OrderModel = require("./order.model");

const index = async (req, res) => {

    const list = await OrderModel.find()

    return res.json(list)
}


const store = async (req, res) => {

    try {

        const {
            customer_id,
            order_number,
            order_type,
            order_date,
            status,
            total_amount,
            subtotal,
            tax_amount,
            discount_amount,
            delivery_fee,
            packaging_fee,
            payment_method,
            payment_status,
            transaction_id,
            delivery_address,
            delivery_instructions,
            estimated_delivery_time,
            actual_delivery_time,
            assigned_chef_id,
            assigned_delivery_partner,
            special_instructions,
            coupon_code,
            loyalty_points_used
        } = req.body

        const save = await OrderModel.create({
            customer_id,
            order_number,
            order_type,
            order_date,
            status,
            total_amount,
            subtotal,
            tax_amount,
            discount_amount,
            delivery_fee,
            packaging_fee,
            payment_method,
            payment_status,
            transaction_id,
            delivery_address,
            delivery_instructions,
            estimated_delivery_time,
            actual_delivery_time,
            assigned_chef_id,
            assigned_delivery_partner,
            special_instructions,
            coupon_code,
            loyalty_points_used
        })

        if (!save) {
            return res.json({
                message: "sometthing went wrong!"
            })
        }

        return res.json({
            message: "Data Created successfully!",
            Data: {
                customer_id,
                order_number,
                order_type,
                order_date,
                status,
                total_amount,
                subtotal,
                tax_amount,
                discount_amount,
                delivery_fee,
                packaging_fee,
                payment_method,
                payment_status,
                transaction_id,
                delivery_address,
                delivery_instructions,
                estimated_delivery_time,
                actual_delivery_time,
                assigned_chef_id,
                assigned_delivery_partner,
                special_instructions,
                coupon_code,
                loyalty_points_used
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

        const data = await OrderModel.findById(id)

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
            customer_id,
            order_number,
            order_type,
            order_date,
            status,
            total_amount,
            subtotal,
            tax_amount,
            discount_amount,
            delivery_fee,
            packaging_fee,
            payment_method,
            payment_status,
            transaction_id,
            delivery_address,
            delivery_instructions,
            estimated_delivery_time,
            actual_delivery_time,
            assigned_chef_id,
            assigned_delivery_partner,
            special_instructions,
            coupon_code,
            loyalty_points_used
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                customer_id,
                order_number,
                order_type,
                order_date,
                status,
                total_amount,
                subtotal,
                tax_amount,
                discount_amount,
                delivery_fee,
                packaging_fee,
                payment_method,
                payment_status,
                transaction_id,
                delivery_address,
                delivery_instructions,
                estimated_delivery_time,
                actual_delivery_time,
                assigned_chef_id,
                assigned_delivery_partner,
                special_instructions,
                coupon_code,
                loyalty_points_used
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

        const data = await OrderModel.deleteOne({ _id: id })

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