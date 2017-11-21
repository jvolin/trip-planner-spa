var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/trip-planner', {logging: false});

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities: {
    // amenities (string of comma-delimited items)
    type: Sequelize.STRING
  }
})

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING
  }
})

const Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state:{
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DECIMAL)
  }
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db,
  Hotel,
  Restaurant,
  Activity,
  Place
};


// Place

// address
// city
// state
// phone (string)
// location (lat, lon float array)
// Hotel

// name
// num_stars (float from 1 to 5)
// amenities (string of comma-delimited items)
// Activity

// name
// age_range (data-type string)
// Restaurant

// name
// cuisine (comma-delimited string list)
// price (integer from 1 to 5, for how many dollar signs)
