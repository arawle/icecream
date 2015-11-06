var app = angular.module('myapp');

app.controller('icecreamController', ['$scope', function($scope){
  $scope.formData = {}

  $http.get('/api/icecreams')
    .success(function(data) {
      $scope.icecreams = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    })
}]);