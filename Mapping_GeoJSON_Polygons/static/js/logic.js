// Create the map object with center at the San Francisco airport.
// let map = L.map('map').setView([37.5, -122.5], 6);

 

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/vishaldeo/Mapping_Earthquakes/main/torontoNeighborhoods.json";

let satelliteStreets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY
}) ;

let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v11",
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Satellite Streets": satelliteStreets,
  Streets: streets
};


// Create the map object with a center and zoom level.
let map = L.map('map', {
  center: [ 43.68108112399995,-79.39119482699992],
  zoom: 11,
  // collapsed: false,
  layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

 // Our style object
var mapStyle = {
  color: "yellow",
  fillColor: "pink",
  fillOpacity: 0.5,
  weight: 2
};

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
// Creating a GeoJSON layer with the retrieved data.
console.log(data)
L.geoJSON(data).addTo(map);
});
