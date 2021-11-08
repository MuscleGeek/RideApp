const mongoose = require("mongoose");
require('dotenv').config();

const CONNECTION_STRINGS = process.env.CONNECTION_STRINGS;

const connectDB = () => {
    mongoose.connect(CONNECTION_STRINGS,{useUnifiedTopology: true, useNewUrlParser: true });

    //Validating connectionDB
    const connection = mongoose.connection;

    connection.on("connected", () => console.log("Database Connection Sucessfully"));

    //error CNX
    connection.on('error', () => { console.log("Oops, something went wrong!, Database connection error!")});


}

connectDB()

module.exports = mongoose;
