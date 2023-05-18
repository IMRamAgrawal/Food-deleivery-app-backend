const express = require("express")
const db = require("./conn/db")


const Pizza = require("./models/pizzaModel")
const User = require("./models/userModel")
const app = express();
app.use(express.json());


const pizzasRoute = require("./routes/pizzasRoute")
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/orderRoute")

app.use("/api/pizzas", pizzasRoute)
app.use("/api/users/", userRoute)
app.use("/api/orders/", orderRoute)
app.get("/", (req, res) => {
    res.send("Server working");
  });
  
  

const port = process.env.PORT || 5000;

app.listen(port, ()=> "Server running on port")