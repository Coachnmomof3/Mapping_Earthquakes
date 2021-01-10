// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// let map = L.map('mapid').setView([37.5, -122.5], 10);
// let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + feature.properties.name + "</h2>");
//   } 
// }).addTo(map);
// Coordinates for each point to be used in the polyline
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]

// ];
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
    //center: [
      //40.7, -94.5
    //],
   // zoom: 4
  //});

//  Add a marker to the map for Los Angeles, California.

// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// L.circleMarker([34.0522, -118.2437], {
//   radius: 100,
//   color: "black",
//   fillColor: '#ffffa1'  
// }).addTo(map);

// // An array containing each city's location, state, and population.
// let cities = [{
//   location: [40.7128, -74.0059],
//   city: "New York City",
//   state: "NY",
//   population: 8398748
//  },
//  {
//   location: [41.8781, -87.6298],
//   city: "Chicago",
//   state: "IL",
//   population: 2705994
//  },
//  {
//   location: [29.7604, -95.3698],
//   city: "Houston",
//   state: "TX",
//   population: 2325502
//  },
//  {
//   location: [34.0522, -118.2437],
//   city: "Los Angeles",
//   state: "CA",
//   population: 3990456
//  },
//  {
//   location: [33.4484, -112.0740],
//   city: "Phoenix",
//   state: "AZ",
//   population: 1660272
// }];

// Get data from cities.js
// let cityData = cities;

//Loop through the cities array and create one marker for each city.
//cities.forEach(function(city) {
// airportData.forEach(function(airport) {
//   console.log(airport)
//   L.marker(airport.name)
// //   //L.circleMarker(city.location, {
// //     //radius: city.population/100000
// //     //color: "black",
// //    //fillColor: '#ffffa1'
// //   //.addTo(map); 
//    .bindPopup("<h2>Airport Code" + airport.faa + ", " + airport.name + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//    .addTo(map);
// });

  // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//     //id: 'mapbox/streets-v11',
//    // tileSize: 512,
//     //zoomOffset: -1,
//       accessToken: API_KEY

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

let map = L.map("mapid", {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // THen we add our 'Streets' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Coachnmomof3/Mapping_Earthquakes/main/majorAirports.json";    

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
// Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });

// //Loop through the cities array and create one marker for each city.
// //cities.forEach(function(city) {
//   airportData.forEach(function(data) {
//     console.log(data)
//     L.marker(data.name)
//   //   //L.circleMarker(city.location, {
//   //     //radius: city.population/100000
//   //     //color: "black",
//   //    //fillColor: '#ffffa1'
//   //   //.addTo(map); 
//      .bindPopup("<h2>Airport Code" + data.faa + ", " + data.name + "</h2>")
//      .addTo(map);
//   });


// // Then we add our 'graymap' tile layer to the map.
//  streets.addTo(map);

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  pointToLayer: function(features, latlng){
    console.log(features);
    return L.marker(latlng)
    .bindPopup("<h2>" + "Airport code: " +  features.properties.faa + "<h2>" + "----------------------------------------" + "<h2>" + "Airport Name: " + features.properties.name);
  }
}).addTo(map);
});