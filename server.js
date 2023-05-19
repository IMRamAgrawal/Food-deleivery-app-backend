const express = require("express")
const cors = require("cors");
const db = require("./conn/db")


const Pizza = require("./models/pizzaModel")
const User = require("./models/userModel")
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
app.use(cors());

const pizzasRoute = require("./routes/pizzasRoute")
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/orderRoute")



app.use("/api/pizzas", pizzasRoute)
app.use("/api/users", userRoute)
app.use("/api/orders", orderRoute)
app.get("/", (req, res) => {
    res.send("Server working");
  });
  
  



app.listen(port, ()=> "Server running on port")

// const express = require("express");
// const db = require("./conn/db");

// const Pizza = require("./models/pizzaModel");
// const User = require("./models/userModel");

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());

// // Routes
// const pizzasRoute = require("./routes/pizzasRoute");
// const userRoute = require("./routes/userRoute");
// const orderRoute = require("./routes/orderRoute");

// app.use("/api/pizzas", pizzasRoute);
// app.use("/api/users", userRoute);
// app.use("/api/orders", orderRoute);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Server working");
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
