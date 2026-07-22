const ReviewsModel = require("./reviews.model");

const index = (req, res) => {
    return res.json('i am index function')
}

const store = (req, res) => {

    try {

        const {
            customer_id,
            item_id,
            order_id,
            rating,
            food_rating,
            delivery_rating,
            title,
            review_text,
            images,
            is_verified,
            is_approved,
            helpful_count,
        } = req.body

        return res.json({
            message: "Data Created successfully!",
            Data: {
                customer_id,
                item_id,
                order_id,
                rating,
                food_rating,
                delivery_rating,
                title,
                review_text,
                images,
                is_verified,
                is_approved,
                helpful_count,
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
            item_id,
            order_id,
            rating,
            food_rating,
            delivery_rating,
            title,
            review_text,
            images,
            is_verified,
            is_approved,
            helpful_count,
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                customer_id,
                item_id,
                order_id,
                rating,
                food_rating,
                delivery_rating,
                title,
                review_text,
                images,
                is_verified,
                is_approved,
                helpful_count,
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