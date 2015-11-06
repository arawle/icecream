(function() {
  'use strict';

  angular
    .module('myapp')
    .controller('icecreamsController', icecreamsController);

  icecreamsController.$inject = [
    '$scope',
    '$location',
    'IceCreamsFactory',
    'IceCreamFactory'
  ];

  function icecreamsController($scope, $location, IceCreamsFactory, IceCreamFactory) {
    IceCreamsFactory.getCreams();
    $scope.allIceCream = IceCreamsFactory.icecreams;
    $scope.icecream = {};

    $scope.add = function(icecream){
      IceCreamsFactory.add(icecream);
      $scope.icecream = {};
      IceCreamsFactory.getCreams();
      $scope.allIceCream = IceCreamsFactory.icecreams;
    };

    $scope.show = function(icecream){
      var path = '/' + icecream._id;
      $location.path(path);
    };

    $scope.delete = function(icecream){
      IceCreamsFactory.delete(icecream._id);
      IceCreamsFactory.getCreams();
      $scope.allIceCream = IceCreamsFactory.icecreams;
    };
  }
})();
