const express = require('express');
const router = express.Router();
module.exports = router;
const Promise = require('bluebird');

const { db, Hotel, Activity, Place, Restaurant }  = require('../models');

var allAttractions = {};

router.get('/api', function(req, res, next){
  const hotel = Hotel.findAll();
  const activity = Activity.findAll();
  const restaurant = Restaurant.findAll();
  Promise.all([hotel, activity, restaurant])
  .then(function(dataArray){
    res.json(dataArray)
  })
})
