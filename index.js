const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRoute = require("./routes/index")
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/" , usersRoute)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser : true , useUnifiedTopology : true})
const connection = mongoose.connection

connection.once("open" , () => {
    console.log("database connected");
})

connection.on("error" , () => {
    console.log("error in database connection");
})

app.get("/" , (req , res) => {
    res.send("Hello World");
})

app.listen(port , (err) => {
    if(err) console.log(err.message);
    console.log("server started");
})