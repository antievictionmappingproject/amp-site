'use strict';

/**
 * @ngdoc function
 * @name aempSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aempSiteApp
 */
angular.module('ampSiteApp')
  .controller('MainCtrl', function ($scope) {

    angular.extend($scope, {
      defaults: {
      tileLayer: 'http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
      // maxZoom: 14,
      // path: {
      //   weight: 10,
      //   color: '#800000',
      //   opacity: 1
      // }
      }
    });

    angular.extend($scope, {
      center: {
        sf: {
          lat: 37.7756,
          lng: -122.4193,
          zoom: 13
        },
        sm: {
          lat: 34.025, 
          lng: -118.47,
          zoom: 14
        },
        la: {
          lat: 34.0953048,
          lng: -118.265477,
          zoom: 11
        }
      }
    });
  });
