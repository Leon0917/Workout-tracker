const express = require("express");
const mongoose= require("mongoose");
const PORT = process.env.PORT || 3000;

// const User = require("../models");


const app = express();
// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/routes.js"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

var routes = require("./controllers/workoutController.js");
app.use(routes);


  // Set the app to listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
 
