const debug = require("debug")("aston-martin:UserController");
const user = require("../models/user");

module.exports = {
    post: async (req, res) => {
        try {
            const { f_name, l_name, contact, email } = req.body;
            const userData = await user.create({
                f_name: f_name,
                l_name: l_name,
                contact: contact,
                email: email
            })
            res.status(200).send(userData)
        } catch (error) {
            debug(error)
        }
    }
}
