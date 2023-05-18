const mongoose = require("mongoose")

const orderSchema= mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true  
    },
    userid :{
        type: String,
        require: true
    },
    orderItems: []

})

module.exports = mongoose.model("order", orderSchema)