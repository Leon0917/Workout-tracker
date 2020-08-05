const router = require("express").Router();
const db = require("../models/index.js");
router.get("/api/workouts", function (req, res) {
  db.Workout.find({}).then(function (records) {
    console.log(records);
    res.json(records);
  });
});

router.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(req.params.id,{$push:{exercise:req.body}},{new:true}).then(function (records) {
      console.log(records);
      res.json(records);
    });
  });

  router.post("/api/workouts", function (req, res) {
    db.Workout.create(req.body).then(function (records) {
      console.log(records);
      res.json(records);
    });
  });

  router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
    .limit(7).then(function (records) {
      console.log(records);
      res.json(records);
    });
  });

  module.exports = router;