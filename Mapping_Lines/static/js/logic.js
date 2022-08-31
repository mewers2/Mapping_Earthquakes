// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//var map = L.map('mapid').setView([40.7, -94.5], 4);
//let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Line 5 does this:
// 1. We're assigning the variable map to the object `L.map()`, and we'll instantiate 
//the object with the given string `'mapid'`.
// 2. The `mapid` will reference the `id` tag in our `<div>` element on the `index.html` file.
// 3. The `setView()` method sets the view of the map with a geographical center, 
//where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

// An alternate to the `setView!)` method that is useful when we need to add multiple tile layers or a background image of our map(s):
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Skill Drill: Coordinates for each point to be used in the line. (SFO-FAT-AUS-YYZ-JFK)
let line = [
    [37.6213, -122.3790],
    [36.7758, -119.7181],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create a polyline for the flight route LAX-SFO-SLC-SEA
L.polyline(line, {
    color: "blue", weight: 4, opacity: 0.5, dashArray: 8
}).addTo(map);

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Create the tile layer that will be the background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});

// Create the dark tile layer //styles/mapbox/dark-v10)
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});

// Create the tile layer that will be the background of the map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});

// Create the tile layer that will be the background of the map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});

// add the 'streets' tile layer to the map.
//streets.addTo(map);
//dark.addTo(map);
//satellite.addTo(map);
light.addTo(map);

// // Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle (with 100 meter radius) to the map for Los Angeles, California.
// circle = L.circleMarker([34.0522, -118.2437], {
//     radius: 300, color: 'black', fillColor: '#ffffa1'
// }).addTo(map);

// Get data from cities.js array called cities
// let cityData = cities;

// // Add multiple markers to the map for the array of cities.
// cityData.forEach(function(city){
//     console.log(city)
//     L.marker(city.location)
//     // Add a popup using `bindPopup()`
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// Make the markers circles the size of the city population with the circleMarker() method
// cityData.forEach(function(city){
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: (city.population-200000)/100000, weight: 4, color: '#ffd0a1', fillColor: '#ffd0a1'
//     })
//     // Add a popup using `bindPopup()`
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

