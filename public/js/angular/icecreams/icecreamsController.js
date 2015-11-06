(function() {
  'use strict';

  angular
    .module('myapp')
    .controller('icecreamsController', icecreamsController);

  icecreamsController.$inject = [
    '$scope',
    '$location',
    'IceCreamFactory',
    'SingleIceCreamFactory'
  ];

  function icecreamsController($scope, $location, IceCreamFactory, SingleIceCreamFactory) {
    IceCreamFactory.getCreams();
    $scope.allIceCream = IceCreamFactory.icecreams;
    $scope.icecream = {};

    $scope.add = function(icecream){
      IceCreamFactory.add(icecream);
      $scope.icecream = {};
      IceCreamFactory.getCreams();
      $scope.allIceCream = IceCreamFactory.icecreams;
    };

    $scope.show = function(icecream){
      var path = '/' + icecream._id;
      $location.path(path);
    };

    $scope.delete = function(icecream){
      IceCreamFactory.delete(icecream._id);
      IceCreamFactory.getCreams();
      $scope.allIceCream = IceCreamFactory.icecreams;
    };
  }
})();
