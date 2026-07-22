const ConatctModel = require("./contact.model");

const index = (req, res) => {
    return res.json('i am index function')
}

const store = (req, res) => {

    try {

        const {
            customer_id,
            full_name,
            email,
            phone,
            subject,
            category,
            message_text,
            status,
            assigned_to,
            priority,
        } = req.body

        return res.json({
            message: "Data Created successfully!",
            Data: {
                customer_id,
                full_name,
                email,
                phone,
                subject,
                category,
                message_text,
                status,
                assigned_to,
                priority,
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
            full_name,
            email,
            phone,
            subject,
            category,
            message_text,
            status,
            assigned_to,
            priority,
        } = req.body

        return res.json({
            message: "Data Updated successfully!",
            Data: {
                customer_id,
                full_name,
                email,
                phone,
                subject,
                category,
                message_text,
                status,
                assigned_to,
                priority,
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