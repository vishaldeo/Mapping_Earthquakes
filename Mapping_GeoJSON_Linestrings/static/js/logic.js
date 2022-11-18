// Create the map object with center at the San Francisco airport.
// let map = L.map('map').setView([37.5, -122.5], 6);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/vishaldeo/Mapping_Earthquakes/main/torontoRoutes.json";




let dark = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 3,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY
}) ;

let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 3,
  zoomOffset: -1,
  id: "mapbox/light-v11",
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  light: streets,
  Dark: dark
};


// Create the map object with a center and zoom level.
let map = L.map('map', {
  center: [30, 30],
  zoom: 2,
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
d3.json(torontoData).then(function(data) {
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  // Passing in our style object
  style: mapStyle,
  onEachFeature: function(feature, layer) {
       // Giving each feature a pop-up with information pertinent to it
       layer.bindPopup("<h1> Airline : " + feature.properties.airline + "</h1> <hr> <h2> Destination:" + feature.properties.dst + "</h2>");

  }
}).addTo(map);
});
