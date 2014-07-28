angular
  .module('amp.map', [  
   'leaflet-directive',
   'ngResource',
   'amp.controllers',
   'ui.router.state'])

  .constant('AmpLeafletConstants', {
    centers: {
      'San Francisco': {
        lat: 37.7756,
        lng: -122.4193,
        zoom: 13
      },
      'Santa Monica': {
        lat: 34.025, 
        lng: -118.47,
        zoom: 14
      },
      'Los Angeles': {
        lat: 34.0953048,
        lng: -118.265477,
        zoom: 11
      }
    },
    defaults: {
      tileLayer: 'http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
    }
  });

