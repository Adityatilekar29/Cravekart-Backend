const ChefModel = require("./chef.model");

const index = async (req, res) => {

    const list = await ChefModel.find()

    return res.json(list)
}

const store = async (req, res) => {

    try {

        const {
            first_name,
            last_name,
            email,
            phone,
            specialty,
            profile_image,
            bio,
            experience_years,
            is_active,
            shift_timing,
            rating,
            total_orders_prepared
        } = req.body


        const save = ChefModel.create({
            first_name,
            last_name,
            email,
            phone,
            specialty,
            profile_image,
            bio,
            experience_years,
            is_active,
            shift_timing,
            rating,
            total_orders_prepared
        })

        if (!save) {
            return res.json({
                message: "something went wrong!"
            })
        }

        return res.json({
            message: "Data Created successfully!",
            Data: {
                first_name,
                last_name,
                email,
                phone,
                specialty,
                profile_image,
                bio,
                experience_years,
                is_active,
                shift_timing,
                rating,
                total_orders_prepared
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

        const data = ChefModel.findById(id)

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
            first_name,
            last_name,
            email,
            phone,
            specialty,
            profile_image,
            bio,
            experience_years,
            is_active,
            shift_timing,
            rating,
            total_orders_prepared
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                first_name,
                last_name,
                email,
                phone,
                specialty,
                profile_image,
                bio,
                experience_years,
                is_active,
                shift_timing,
                rating,
                total_orders_prepared
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

        const data = ChefModel.deleteOne({ _id: id })

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