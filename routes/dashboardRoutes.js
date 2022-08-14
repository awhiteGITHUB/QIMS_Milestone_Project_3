const express = require('express'),
  router = require('express').Router()
const Record = require('../models/records')

//
router.post("/record", (req, res)=>{
  const sku = req.body.sku;
  const type = req.body.type;
  const name = req.body.name;
  const qty = req.body.qty;
  const date = req.body.date;
  const description = req.body.description;
  const newRecord = new Record({
    sku: "",
    type: "",
    name: "",
    qty: "",
    date: "",
    description: "",
  });

  newRoutine.save();
})

router.get("/profile", (req, res) => {
  Workout.find()
      .then(foundWorkouts => res.json(foundWorkouts))
      .catch(err => res.status(400).json("Error: " + err));
});


router.delete('/delete/:id', (req,res) => {
  const id = req.params.id;
  Workout.findByIdAndDelete({_id: id}, (req, res, err) => {
    if(!err){
      console.log("Item deleted");
    }else {
      console.log(err);
    }
  })
})

router.put('/edit/:id', (req, res) => {
  const updateRoutine = {
    title: req.body.title,
    content: req.body.content,
    lbs: req.body.lbs,
    reps: req.body.reps,
    timer: req.body.timer,

};
  Workout.findByIdAndUpdate({_id: req.params.id}, {$set: updateRoutine}, (req, res, err) => {
    if(!err){
      console.log("Item updated");
    }else {
      console.log(err);
    }
  })
})

module.exports = router