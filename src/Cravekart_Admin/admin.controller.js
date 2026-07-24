const AdminModel = require("./admin.model")

const index = async (req, res) => {

    const list = await AdminModel.find()
    return res.json(list)
}
const store = async (req, res) => {

    try {
        console.log(req.body);

        const { username,
            email,
            password_hash,
            full_name,
            role,
            profile_image,
            last_login,
            is_active,
            two_factor_enabled
        } = req.body;


        const save = await AdminModel.create({
            username,
            email,
            password_hash,
            full_name,
            role,
            profile_image,
            last_login,
            is_active,
            two_factor_enabled
        });

        if (!save) {
            return res.json({
                message: "Something Went Wrong!"
            })
        }

        return res.json({
            message: "Data Create Successfully!",
            data: {
                username,
                email,
                password_hash,
                full_name,
                role,
                profile_image,
                last_login,
                is_active,
                two_factor_enabled
            }
        });

    } catch (error) {
        console.log(error);
        return res.json({
            message: "Internal Server Error!!"
        })

    }
}
const show = async (req, res) => {

    try {
        const { id } = req.params;

        const data = await AdminModel.findById(id)

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

        const { username,
            email,
            password_hash,
            full_name,
            role,
            profile_image,
            last_login,
            is_active,
            two_factor_enabled
        } = req.body;

        return res.json({
            message: "Data Update Successfully!",
            data: {
                username,
                email,
                password_hash,
                full_name,
                role,
                profile_image,
                last_login,
                is_active,
                two_factor_enabled
            }
        });

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

        const data = await AdminModel.deleteOne({ _id: id })

        return res.json({
            message: "Data Deleted Successfully!",
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