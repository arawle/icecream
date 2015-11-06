var app = angular.module('myapp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/icecreams/index.html',
      controller: 'icecreamController',
    })
}]);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
