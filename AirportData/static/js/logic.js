// Create the map object with center at the San Francisco airport.
// let map = L.map('map').setView([30, 30], 2);





let dark = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY
}) ;

let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
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


let airportData = "https://raw.githubusercontent.com/vishaldeo/Mapping_Earthquakes/main/majorAirports.json";

d3.json(airportData).then(function(data) {
  console.log( data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data)
.addTo(map);
});


