const express = require("express");
const mongoose= require("mongoose");
const PORT = process.env.PORT || 3000;

// const User = require("../models");


const app = express();
// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


const databaseUrl = "workoutDB";
const collections = ["workoutSeed"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.send("Testing out my workout application");
  });
  

app.get("/exercise", (req, res) => {
    db.workoutSeed.find()({
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  // Set the app to listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
 
