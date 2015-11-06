var app = angular.module('myapp');

app.factory('IceCreamFactory', ['$http', function($http){
  var IceCreamFactory = {};

  IceCreamFactory.icecreams = [];

  IceCreamFactory.getCreams = function(){
    IceCreamFactory.icecreams = [];
    $http.get('/api/icecreams')
      .success(function(data) {
        for (var i = 0; i < data.length; i++){
          IceCreamFactory.icecreams.push(data[i]);
        };
      })
      .error(function(data) {
        console.log('Error: ' + data)
      });
  };

  IceCreamFactory.add = function(icecream){
    $http.post('/api/icecreams', icecream)
      .success(function(data) {
        console.log(data)
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  IceCreamFactory.delete = function(id){
    $http.delete('/api/icecreams/' + id)
      .success(function(data) {
        console.log('success');
      })
      .error(function(data) {
        console.log('Error: ' + data)
      });
  };

  return IceCreamFactory;
}]);

app.factory('SingleIceCreamFactory', ['$http', function($http){
  var SingleIceCreamFactory = {};

  SingleIceCreamFactory.icecream = [];

  SingleIceCreamFactory.findById = function(id){
    var icecream = 'api/icecreams/' + id;
    SingleIceCreamFactory.icecream = [];

    $http.get(icecream)
      .success(function(data) {
        SingleIceCreamFactory.icecream.push(data);
      })
      .error(function(data) {
        console.log('Error: ' + data)
      });
  };

  return SingleIceCreamFactory;
}]);










