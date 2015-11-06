angular
  .module('myapp', [
    'ngRoute'
  ])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../views/icecreams/index.html',
      controller: 'icecreamController'
    })
    .when('/:id', {
      templateUrl:'../views/icecreams/icecream.html',
      controller: 'individualIceCreamController'
    })
}])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
