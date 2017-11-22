const express = require('express');
const router = express.Router();
module.exports = router;
const Promise = require('bluebird');

const { db, Hotel, Activity, Place, Restaurant }  = require('../models');

var allAttractions = {};

router.get('/api', function(req, res, next){
  const hotel = Hotel.findAll({include: [{all: true}]});
  const activity = Activity.findAll({include: [{all: true}]});
  const restaurant = Restaurant.findAll({include: [{all: true}]});
  Promise.all([hotel, activity, restaurant])
  .spread(function (hotels, activities, restaurants) {
    res.json({
      hotels,
      activities,
      restaurants,
    })
  })
  .catch(next)
})
