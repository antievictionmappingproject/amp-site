'use strict';

/**
 * @ngdoc overview
 * @name aempSiteApp
 * @description
 * # aempSiteApp
 *
 * Main module of the application.
 */

angular
  .module('ampSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'amp.map',
    'ui.bootstrap',
    'ui.router',
    'amp.controllers'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('maps', {
        url: '/maps',
        templateUrl: 'views/partials/map.html',
        controller: 'MapCtrl'
      })
      .state('maps.ellis', {
        url: '/ellis',
        templateUrl: 'views/partials/ellis.html'
        // controller: function() {
        //   console.log('maps.ellis controller fired');
        // }
      })
      .state('maps.ellis.sf', {
        url: '/sf'
      })
      .state('maps.ellis.la', {
        url: '/la'
      })
      .state('maps.ellis.sm', {
        url: '/sm'
      });
  });

  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });

