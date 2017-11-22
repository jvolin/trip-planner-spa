const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");
const requestData = require('./api');

mapboxgl.accessToken = "pk.eyJ1IjoiZGFydGhqYWNlbiIsImEiOiJjamE5dDN1dGEwYW55MzJ0ZWx0enVyaGpvIn0.s8G-avL9HwyLv0_FjKymgA";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 14, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

const attractionsData = requestData()
// attractionsData
// .then(data => {
//   console.log(data.hotels)
// })
// .catch(next)

const hotelsSelect = document.getElementById('hotels-choices')

hotelsSelect.addEventListener('click', function(){
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }
  attractionsData
    .then(data => {
      console.log(data.hotels)
      data.hotels.forEach(elem => {
      addSelect.call(this, elem)
    })
  })
})


function addSelect(data){
  const opts = document.createElement('option')
  opts.value = data.name
  opts.innerText = data.name
  this.appendChild(opts)
}
