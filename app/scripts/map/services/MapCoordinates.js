'use strict';

angular.module('amp.map')
  .factory('MapCoordinates', ['AmpLeafletConstants', function(AmpLeafletConstants) {
    // var centerObj = {};
    var center = {lat:0, lng:0, zoom:1};
    var pickCity = function (city) {
      center.lat = AmpLeafletConstants.centers[city].lat;
      center.lng = AmpLeafletConstants.centers[city].lng;
      center.zoom = AmpLeafletConstants.centers[city].zoom;
    };

    pickCity('San Francisco');

    return {
      center: center,
      pickCity: pickCity
    };
  }]);