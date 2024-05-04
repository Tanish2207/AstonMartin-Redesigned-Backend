const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
    compName: { type: String, default: null },
    contact: { type: Number, default: 1234567890 },
    location: { type: String, default: null },
    link: {type: String, default: null}
})
module.exports = mongoose.model("dealer", dealerSchema);
