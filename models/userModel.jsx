const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        //   //  ENTITIES    //  //
    username: {type:String, required:true},
    password: {type:String, required:true}
})

const userModel = new mongoose.model('users', userSchema)    //creates table user along userSchema entities as cols

module.exports = userModel