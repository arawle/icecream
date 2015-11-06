angular
  .module('myapp')
  .controller('icecreamController', icecreamController);

icecreamController.$inject = ['$scope', '$location', 'IceCreamFactory', 'SingleIceCreamFactory'];

function icecreamController ($scope, $location, IceCreamFactory, SingleIceCreamFactory) {
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

};

