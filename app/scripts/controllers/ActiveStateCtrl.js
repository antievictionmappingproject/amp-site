'use strict';
angular.module('amp.controllers', []);
angular.module('amp.controllers')
  .controller('ActiveStateCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.isActive = function (statePath) {
      return $state.is(statePath) || $state.includes(statePath);
    };
  }]);