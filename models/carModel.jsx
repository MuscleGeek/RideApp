const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({   
    
    //      //      ENTITIES      //        //
    name:{type:String, required:true},
    image: {type: String, required: true},
    capacity: {type: Number, required: true},
    fuel: {type: String, required: true},
    bookedTimeSlots : [
        {
            from : {type : String, required:true},
            to : {type: String, required:true}
        }
    ],

    rentPerHour : {type: Number, required: true}
}, {timestamps :true}

)

const carModel = new mongoose.model('cars', carSchema )    //create new table || collection named cars using carSchema data as entities

module.exports = carModel