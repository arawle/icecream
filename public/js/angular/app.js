var app = angular.module('myapp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../icecreams/index.html',
      controller: 'iceCreamController'
    })
}]);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
