
const express = require('express')
const app = express()
const cors = require('cors')
/*const port = process.env.PORT;*/
const dbConnection = require('./db') //this line will be added when we have created db.js file
require('dotenv').config()
app.use(cors())
app.use(express.json()) //bodyParser

//ROUTES
app.use('/api/users/', require('./routes/usersRoute.jsx'))
app.use('/api/cars', require('./routes/carsRoute.jsx'))
app.use('/api/bookings', require('./routes/bookingsRoute.jsx'))

app.get("/", (req,res) => res.send("Hello Dev!"))
app.listen(process.env.PORT, () => console.log(`Node JS Server Started in Port ${process.env.PORT}`))


