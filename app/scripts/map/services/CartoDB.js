'use strict';

angular.module('amp.map')
  .factory('CartoDB', ['$resource', function($resource){
    return $resource('http://:username.cartodb.com/api/v2/sql');
  }]);