const mongoose = require("mongoose")

require('dotenv').config()

const CONNECTION_STRINGS = process.env.CONNECTION_STRINGS;

const connectDB = () => {
    mongoose.connect("mongodb+srv://mern_dev:VDVKs24tIXF1G9m5@cluster0.dgkmy.mongodb.net/auto_rental",{useUnifiedTopology: true, useNewUrlParser: true });

    //Validating connectionDB
    const connection = mongoose.connection;

    connection.on("connected", () => {console.log("Database Connection Sucessfully")});

    //error CNX
    connection.on("error", () => { console.log("Oops, something went wrong!, Database connection error!")});


}

connectDB();

module.exports = mongoose;
