(function() {
  'use strict';

  angular
    .module('myapp')
    .controller('icecreamController', icecreamController);

  icecreamController.$inject = [
    '$scope',
    '$location',
    'IceCreamFactory',
    'IceCreamsFactory',
    '$routeParams'
  ];

  function icecreamController ($scope, $location, IceCreamFactory, IceCreamsFactory, $routeParams) {
    var iceCreamId =  $routeParams.id;
    IceCreamFactory.findById(iceCreamId);
    $scope.icecream = IceCreamFactory.icecream;

    $scope.edit = function(icecream){
      IceCreamFactory.editIceCream(icecream[0]);
    };

    $scope.goback = function(){
      $location.path('/');
    };
  };
})();
