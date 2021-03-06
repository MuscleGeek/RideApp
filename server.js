
const express = require('express')
const app = express()
const cors = require('cors')
const dbConnection = require('./db.js') //this line will be added when we have created db.js file
require("dotenv").config()
app.use(cors())
app.use(express.json()) //bodyParser

//ROUTES
app.use('/api/users/', require('./routes/usersRoute.jsx'))
app.use('/api/cars', require('./routes/carsRoute.jsx'))
app.use('/api/bookings', require('./routes/bookingsRoute.jsx'))

//DEPLOYMENT
const path = require('path')
if(process.env.NODE_ENV === "production")
{
    app.use("/", express.static("client/build")) //FE Project name deploy path

    app.get("*", (req,res) => {

        res.sendFile(path.resolve(__dirname, "client/build/index.html")) 
    })
}
app.get("/", (req,res) => res.send("Hello Dev!"))
app.listen(process.env.PORT, () => console.log(`Node JS Server Started in Port ${process.env.PORT}`))


