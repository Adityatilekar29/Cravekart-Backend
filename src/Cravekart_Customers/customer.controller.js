const CustomerModel = require("./customer.model");

const index = (req, res) => {
    return res.json('i am index function')
}

const store = (req, res) => {

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