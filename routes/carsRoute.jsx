const express = require("express")
const router = express.Router()

//Models
const Car = require("../models/carModel.jsx")

//CRUD :: R
router.get("/getallcars", async(req, res) => {

    try {
        const getCars = await Car.find() //Query to get all cars from model aka "select * from cars"
        res.send(getCars) //send query
    } catch (error) {
        return res.status(400).json(error)
        
    }

})
//CRUD :: C
router.post("/addcar", async(req,res) => {
    try {
        const newCar = new Car(req.body) //instancing a new car object
        await newCar.save()

        res.send("Got it!, Car has been added successfully")

    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router;