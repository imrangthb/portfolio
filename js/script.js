// Initialize the map
var map = L.map('map').setView([51.2213, 4.4087], 13); // Coordinates for Antwerpen, zoom 13

// Add a tile layer (you can choose a different provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

// Add a marker for Ellermanstraat
L.marker([51.2276, 4.4136]).addTo(map)
 .bindPopup("ImraNet is here!"); // Coordinates for Ellermanstraat