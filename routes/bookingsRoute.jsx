require('dotenv').config()
const express = require('express')
const stripe = require('stripe')('sk_test_51JwKlOACraCbfISzAaLgqYHBwHIOVzOsgPGwlWforyMzzsb40TPojwcT9D5tsHlfIQDzt9h40dYXJGx1Y8QEOX7400lu5fZWtB')  //SSK Stripe Secret Key
const router = express.Router()
//Model Collection
const Booking = require('../models/bookingModel.jsx')
const Car = require('../models/carModel.jsx')

//Unique UID
const {v4: uuidv4} =  require('uuid')



//BOOKING CRUD
router.post('/bookcar', async(req,res) => {         //Save Booking Car 
        req.body.transactionId = '1234' 
        
        //Stripe Payment Gateway Integration token
        const {token} = req.body;

        try {

            //Stripe Payment Integration customer info

            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            })
                //Stripe Payment Customer Charges
            const payment = await stripe.charges.create({
                amount: req.body.totalAmount * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email
            },
            {
                idempotencyKey : uuidv4()  //Unique key per each transaction
            })
            
            //Payment Validation Success/Not Success
            if(payment){

                req.body.transactionId = payment.source.id
                const newBooking = new Booking(req.body)
                await newBooking.save()
                
                const car = await Car.findOne({_id: req.body.car})
                /**console.log(req.body.car); */
                car.bookedTimeSlots.push(req.body.bookedTimeSlots)
                
                await car.save()
                res.send('Your booking has been successfully')

            }else {
                return res.status(400).json(error)
            }
            
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
            
            
        }
    });

router.get('/getallbookings', async(req,res) => {
    try {
        
        const bookings =  await Booking.find().populate('car')  //Find into Booking Collection the entity named 'car'
        res.send(bookings)
    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router;