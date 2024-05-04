const debug = require("debug")("aston-martin:DealerController");
const dealer = require("../models/dealer");

module.exports = {
    get: async (req, res) => {
        try {
            const dealers = await dealer.find();
            res.status(200).send(dealers)
        } catch (error) {
            debug(error)
        }
    }
}
