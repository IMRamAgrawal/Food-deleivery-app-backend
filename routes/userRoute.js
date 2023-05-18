const express = require("express");
const router = express.Router();
const User = require("../models/userModel")

router.post("/register", async(req, res)=>{
    const{name, email, password} = req.body
   
    try{
    let user = await User.findOne({email: req.body.email})
    if(user){
        console.log("Hello")
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }

    
    const newUser = new User({name, email, password})

        newUser.save()
        res.json("User Registered successfully")
    }
    catch (error){
        return res.status(400).json({message: error});
    }
});

router.post("/login", async(req,res)=>{
    const{email, password} = req.body
    try{
       const user = await User.find({email, password})
        console.log(user)
        if(user.length > 0){
            const currentUser = {
                name :user[0].name,
                email :user[0].email,
                isAdmin :user[0].isAdmin,
                id :user[0]._id
            }
            res.send(currentUser)
        }
        else{
            return res.status(400).json({message: "User Login Failed"})
        }
    }catch (error){
        return res.status(400).json({message: "something went wrong"})
    }
})

module.exports = router