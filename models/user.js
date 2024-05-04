const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    f_name: { type: String, default: null },
    l_name: { type: String, default: null },
    contact: { type: Number, default: 1234567890 },
    email: { type: String, default: null },
})
module.exports = mongoose.model("user", userSchema);
