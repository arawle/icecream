(function(){
  'use strict';

  angular
    .module('myapp')
    .factory('IceCreamFactory', IceCreamFactory);

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
})();










