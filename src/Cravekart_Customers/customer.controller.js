const CustomerModel = require("./customer.model");

const index = async (req, res) => {

    const list = CustomerModel.find()

    return res.json(list)
}

const store = async (req, res) => {

    try {

        const {
            email,
            password_hash,
            first_name,
            last_name,
            phone,
            address_line1,
            address_line2,
            city,
            state,
            postal_code,
            country,
            latitude,
            longitude,
            is_verified,
            is_active
        } = req.body


        const save = await CustomerModel.create({
            email,
            password_hash,
            first_name,
            last_name,
            phone,
            address_line1,
            address_line2,
            city,
            state,
            postal_code,
            country,
            latitude,
            longitude,
            is_verified,
            is_active
        })

        if (!save) {
            return res.json({
                message: "something went wrong!"
            })
        }

        return res.json({
            message: "Data Created successfully!",
            Data: {
                email,
                password_hash,
                first_name,
                last_name,
                phone,
                address_line1,
                address_line2,
                city,
                state,
                postal_code,
                country,
                latitude,
                longitude,
                is_verified,
                is_active
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

        const data = CustomerModel.findById(id)

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
            email,
            password_hash,
            first_name,
            last_name,
            phone,
            address_line1,
            address_line2,
            city,
            state,
            postal_code,
            country,
            latitude,
            longitude,
            is_verified,
            is_active
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                email,
                password_hash,
                first_name,
                last_name,
                phone,
                address_line1,
                address_line2,
                city,
                state,
                postal_code,
                country,
                latitude,
                longitude,
                is_verified,
                is_active
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

        const data = CustomerModel.deleteOne({ _id: id })

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