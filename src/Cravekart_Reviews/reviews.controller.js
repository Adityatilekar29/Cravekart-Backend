const ReviewsModel = require("./reviews.model");

const index = async (req, res) => {
    try {
        const list = await ReviewsModel.find();
        return res.json(list)
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
}
    
const store = async (req, res) => {

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

        const save = await ReviewsModel.create({
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
        });
        if (!save) {
            return res.json({
                message: "Something went wrong!"
            })
        }

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

const show = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ReviewsModel.findById(id);
        return res.json({
            message: "Reqest Accepted Successfully!",
            data
        });

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

const deleted = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ReviewsModel.deleteOne({ _id: id });
        return res.json({
            message: "Reqest Accepted Successfully!",
            data
        });

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