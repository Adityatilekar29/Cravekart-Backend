const OrderModel = require("./order.model");

const index = (req, res) => {
    return res.json('i am index function')
}


const store = (req, res) => {

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