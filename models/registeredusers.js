const mongoose = require("mongoose");

const registeredUserSchema = new mongoose.Schema({
    email : String,
    date : String,
    venue : String
})

module.exports = mongoose.model("RegisteredUser" , registeredUserSchema);