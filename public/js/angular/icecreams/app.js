(function(){
  'use strict';

  angular.module('myapp', ['ngRoute']).config(configFunc);

  configFunc.$inject = ['$routeProvider', '$locationProvider'];

  function configFunc($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/icecreams/index.html',
        controller: 'icecreamController'
      })
      .when('/:id', {
        templateUrl: '../views/icecreams/icecream.html',
        controller: 'individualIceCreamController'
      });

    $locationProvider.html5Mode(true);
  }
})();
