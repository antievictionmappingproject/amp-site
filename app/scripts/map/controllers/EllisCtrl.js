'use strict';

angular.module('amp.map')
  .value('EllisValues', {
    cities: {
      'San Francisco': {
        username: 'ampitup',
        sqlQuery: '',
        templateUrl: 'views/templates/map/ellis.sf.html'
      },
      'Los Angeles': {
        username: 'ampitup',
        sqlQuery: 'SELECT the_geom, address, cartodb_id, owner_name, date_filed, no_of_withdrawn_units FROM la_20combined WHERE NOT(the_geom IS NULL OR date_filed IS NULL OR no_of_withdrawn_units IS NULL) ORDER BY date_filed ASC',
        templateUrl: 'views/templates/map/ellis.la.html'
      },
      'Santa Monica': {
        username: 'ampitup',
        sqlQuery: '',
        templateUrl: 'views/templates/map/ellis.sm.html'
      }  
    }
  })
  .controller('EllisCtrl', ['$scope', '$location', 'AmpLeafletConstants', 'EllisValues', 'MapCoordinates', 'CartoDB', '$state',
    function ($scope, $location, AmpLeafletConstants, EllisValues, MapCoordinates, CartoDB, $state) {
    $scope.ellis = {};
    $scope.ellis.active = {};

    var selectEllisCity = function(cityName) {
      $scope.ellis.active = EllisValues.cities[cityName];
      MapCoordinates.pickCity(cityName);

      $scope.ellis.active.geojson = CartoDB.get({
        username: $scope.ellis.active.username, 
        format: 'GeoJSON',
        q: $scope.ellis.active.sqlQuery
      });

      // to let the directive know it should reset 
      $scope.$broadcast('ELLIS_ACTIVE_CITY_CHANGED', cityName);
    };

    $state.go('maps.ellis.sf');
    $scope.selectEllisCity = selectEllisCity;
    selectEllisCity('San Francisco');
  }]);

