const mongoose = require("mongoose");

const validateUserSchema = new mongoose.Schema({
    email : String,
    password : String
})

module.exports = mongoose.model("ValidateUsers" , validateUserSchema);