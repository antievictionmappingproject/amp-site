'use strict';

angular.module('amp.map')
  .directive('ampMapEllis', ['leafletData', 'CartoDB', function (leafletData, CartoDB) {
    return {
      restrict: 'E',
      controller: 'EllisCtrl',
      // require: '^leaflet-directive' 
      // scope: {
      //   evictionCount: '=',
      //   evictionDate: '=',
      //   config: '=',
      //   cityData: '=',
      //   leafletCenter: '=',
      //   selectCity: '&',
      //   citySelection: '='
      // },
      templateUrl: 'views/templates/map/ellis.map.html',
      link: function(scope, element, attrs, EllisCtrl) {
        var geojson;

        scope.$on('ELLIS_ACTIVE_CITY_CHANGED', function(event, city) {
          // console.log(scope.ellis.active.keys + 'selected');
          console.log('ellis city passed to directive: ' + city);
          // var activeCity = scope.ellis.cities[city];
          console.log('geojson: ', scope.ellis.active.geojson);
          console.log('element: ', element);
          console.log('attrs: ', attrs);
          console.log('scope: ', scope);
          // scope.ellis.activeTemplate = scope.ellis.cities[city].templateUrl;
        
          // load new data
          // geojson = CartoDB.get( {username: scope.cityData.username, 
          //                         format: 'geojson', 
          //                         q: scope.cityData.sqlQuery} );
          // geojson.$promise.then(function (data) {
          //   console.log(data);
            // calculate date variables
          // });

          // load new map
          // scope.leafletCenter = scope.cityData.center;

          // get map
          // leafletData.getMap().then(function (map) {
            

          // });
        });
      }
    };
  }]);