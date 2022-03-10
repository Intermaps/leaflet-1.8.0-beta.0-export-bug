import L from 'leaflet';

var map = new L.Map('map', {
  layers: [
    new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    })
  ],
  center: [0, 0],
  zoom: 0
});