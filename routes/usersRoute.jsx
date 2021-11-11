const express = require("express")
const router = express.Router()

//Models
const User = require("../models/userModel.jsx")

router.post("/login", async(req, res) => {
    
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username, password})
        if(user) {
            res.send(user)
        }else{
            return res.status(400).json(error);
        }
    } catch (error) {
        return res.status(400).json(error)
        
    }
})

router.post("/register", async(req, res) => {
    
    try {
        const newUser =  new User(req.body) //trying to create user
        await newUser.save()
        res.send("User registered successfully!")         //save the new user
        
    } catch (error) {
        return res.status(400).json(error)
    }

})

module.exports = router;