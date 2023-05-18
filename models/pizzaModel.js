const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    varients:[],
    prices:[],
    category:{
    type: String,
    require: true
    },
    image: {
        type:String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    // timestamps:{
    //     require: true
    // }
})

const pizzaModal = mongoose.model("pizzas",pizzaSchema)

module.exports = pizzaModal