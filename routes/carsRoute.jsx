const express = require("express")
const router = express.Router()

//Models
const Car = require("../models/carModel.jsx")

router.get("/getallcars", async(req, res) => {

    try {
        const getCars = await Car.find() //Query to get all cars from model aka "select * from cars"
        res.send(getCars) //send query
    } catch (error) {
        return res.status(400).json(error)
        
    }

})

module.exports = router;