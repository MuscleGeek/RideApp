const express = require('express')
const router = express.Router()
//Model Collection
const Booking = require('../models/bookingModel.jsx')
const Car = require('../models/carModel.jsx')

//BOOKING CRUD
router.post('/bookcar', async(req,res) => {         //Save Booking Car 
        req.body.transactionId = '1234'             //ticketID

        try {
            const newBooking = new Booking(req.body)
            await newBooking.save()
            
            const car = await Car.findOne({_id: req.body.car})
            /**console.log(req.body.car); */
            car.bookedTimeSlots.push(req.body.bookedTimeSlots)
            
            await car.save()
            res.send('Your booking has been successfully')
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
            
            
        }
    })

    module.exports = router;