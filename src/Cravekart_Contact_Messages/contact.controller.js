const ConatctModel = require("./contact.model");

const index = async (req, res) => {

    const list = await ConatctModel.find();

    return res.json(list)
}

const store = async (req, res) => {

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


        const save = await ConatctModel.create({
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
        })

        if (!save) {
            return res.json({
                message: "something went wrong!"
            })
        }


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

const show = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await ConatctModel.findById(id)

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

const deleted = async (req, res) => {
    try {
        const { id } = req.params;

        const list = await ConatctModel.deleteOne({ _id: id })

        return res.json({
            message: "Reqest Deleted Successfully!",
            list
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