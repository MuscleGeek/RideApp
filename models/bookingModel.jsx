const mongoose = require('mongoose')

const bookingSchema = new  mongoose.Schema({
    //          ENTITIES            //
        car: {type: mongoose.Schema.Types.ObjectId, ref: 'cars' }, //PK 
        user: {type: mongoose.Schema.Types.ObjectId, ref:'users'},  //PK
        bookedTimeSlots: {
            from : {type: String}, 
            to : {type: String}}, //RangePicker 
        totalHours: {type: Number},
        totalAmount : {type: Number},
        transactionId: {type: String},
        driverRequired: {type: Boolean},
},
  {timestamps :true}
)
        //      COLLECTION aka TABLE        //
const bookingModel = new mongoose.model('bookings', bookingSchema)

module.exports =  bookingModel;