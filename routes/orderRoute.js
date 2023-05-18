const express = require("express")
const router = express.Router();
const Order = require("../models/orderModel")

router.post("/placeorder",async(req,res)=>{
  
const {currentUser, cartItems} = req.body

try{
const neworder = new Order({
    name : currentUser.name,
    email : currentUser.email,
    orderItems : cartItems
})

await neworder.save()
return res.status(200).json({message: "Thank You. Your Order is Successfully Placed"})

}catch(error){
    console.log(error)
}
})

router.post("/getuserorders", async(req,res)=>{
    const {email}= req.body
    console.log(email)
    try{
        // console.log("esrtdghj")
        const orders = await Order.find({email: req.body.email})
        res.send(orders)
        
    }catch(error){
        return res.status(400).json({message: "Sorry Your Order was not successfull. Kindly Try Again!!!"})
    }

})
module.exports = router