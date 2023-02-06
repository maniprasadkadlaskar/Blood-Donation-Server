const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    bod : String,
    weight : String,
    bg : String,
    gender : String,
    street : String,
    area : String,
    city : String,
    pincode : String,
    mobile : String,
    email : String
})

module.exports = mongoose.model("Users" , userSchema);