const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercise: [
    {
      type:{
        type:String,
        required:true
      },
      name:{
        type:String,
        require:true
      },
      duration:{
        type:Number
      },
      
      weight:Number,
      reps:Number,
      sets:Number,
      distance:Number
    }
  ],
  date:{
    type: Date, default: Date.now
     }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
