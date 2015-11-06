angular
  .module('myapp')
  .controller('individualIceCreamController', individualIceCreamController);

individualIceCreamController.$inject = ['$scope', '$location', 'SingleIceCreamFactory', 'iceCreamFactory', '$routeParams'];

function individualIceCreamController ($scope, $location, SingleIceCreamFactory, iceCreamFactory, $routeParams) {
  var iceCreamId =  $routeParams.id;
  SingleIceCreamFactory.findById(iceCreamId);
  $scope.icecream = SingleIceCreamFactory.icecream;

  $scope.edit = function(icecream){
    SingleIceCreamFactory.editIceCream(icecream[0]);
  };

  $scope.goback = function(){
    $location.path('/');
  };

};