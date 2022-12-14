// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
var map = L.map('mapid').setView([40.7, -94.5], 4);

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

// Create the tile layer that will be the background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});
// add the 'streets' tile layer to the map.
streets.addTo(map);