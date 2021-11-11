const mongoose = require("mongoose");
require('dotenv').config();

const connection_strings = process.env.CONNECTION_STRINGS;

const connectDB = () => {
    mongoose.connect(connection_strings,{useUnifiedTopology: true, useNewUrlParser: true });

    //Validating connectionDB
    const connection = mongoose.connection;

    connection.on("connected", () => {console.log("Database Connection Sucessfully")});

    //error CNX
    connection.on('error', () => { console.log("Oops, something went wrong!, Database connection error!")});


}

connectDB();

module.exports = mongoose;
