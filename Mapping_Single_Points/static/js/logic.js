// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

var mapcenter = [34.0522, -118.2437];

// var myMap = L.map("map", {
//   center: mapcenter,
//   zoom: 13
// });

let map = L.map('map').setView([34.0522, -118.2437],14)

L.circle([34.0522, -118.2437], {
  radius: 10000
}).addTo(map);

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 08,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
  });

streets.addTo(map);

// let marker = L.marker([34.0522, -118.2437]).addTo(map);
