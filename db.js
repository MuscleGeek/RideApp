const mongoose = require("mongoose")
import dotenv from 'dotenv'

dotenv.config({path : "./.env"})
//require("dotenv").config()


const connectDB = () => {
    mongoose.connect(`${process.env.CONNECTION_STRINGS}`,{useNewUrlParser: true, useUnifiedTopology: true });

    //Validating connectionDB
    const connection = mongoose.connection;

    connection.on("connected", () => {console.log("Database Connection Sucessfully")});

    //error CNX
    connection.on("error", () => { console.log("Oops, something went wrong!, Database connection error!")});


}

connectDB();

module.exports = mongoose;
