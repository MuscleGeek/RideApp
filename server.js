const express = require('express')
const app = express()
const dbconnection = require('./db') //this line will be added when we have created db.js file
require('dotenv').config()


const PORT = process.env.PORT;

app.get("/", (req,res) => res.send("Hello Dev!"))
app.listen(PORT, () => console.log(`Node JS Server Started in Port ${PORT}!`));