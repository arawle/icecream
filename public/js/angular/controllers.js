var app = angular.module('myapp');

app.controller('icecreamController', ['$scope', '$location', 'IceCreamFactory', function($scope, $location, IceCreamFactory){
  IceCreamFactory.getCreams();
  $scope.allIceCream = IceCreamFactory.icecreams;
  $scope.icecream = {}

  $scope.add = function(icecream){
    IceCreamFactory.add(icecream);
    $scope.icecream = {}
    IceCreamFactory.getCreams();
  };

  $scope.show = function(icecream){
    var path = '/' + icecream._id;
    $location.path(path);
  };

  $scope.delete = function(icecream){
    IceCreamFactory.delete(icecream._id);
  };

}]);

app.controller('individualIceCreamController', ['$scope', '$location', 'SingleIceCreamFactory', '$routeParams', function($scope, $location, SingleIceCreamFactory, $routeParams) {
  var iceCreamId =  $routeParams.id;
  SingleIceCreamFactory.findById(iceCreamId);
  $scope.icecream = SingleIceCreamFactory.icecream;
}]);