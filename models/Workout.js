const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercise: [],
  date: Date
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
