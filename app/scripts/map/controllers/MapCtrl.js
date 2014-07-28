'use strict';

angular.module('amp.map')
  .controller('MapCtrl', ['$scope', 'AmpLeafletConstants', 'MapCoordinates', 
    function ($scope, AmpLeafletConstants, MapCoordinates) {
    $scope.leaflet = {};

    $scope.leaflet.defaults = AmpLeafletConstants.defaults;
    $scope.leaflet.center = MapCoordinates.center;
  }]);