(function(){
  'use strict';

  angular
    .module('myapp')
    .factory('IceCreamsFactory', IceCreamsFactory);

  IceCreamsFactory.$inject = ['$http'];

  function IceCreamsFactory ($http) {
    var IceCreamsFactory = {};
    IceCreamsFactory.icecreams = [];

    IceCreamsFactory.getCreams = function(){
      IceCreamsFactory.icecreams = [];
      $http.get('/api/icecreams')
        .success(function(data) {
          for (var i = 0; i < data.length; i++){
            IceCreamsFactory.icecreams.push(data[i]);
          };
        })
        .error(function(data) {
          console.log('Error: ' + data)
        });
    };

    IceCreamsFactory.add = function(icecream){
      $http.post('/api/icecreams', icecream)
        .success(function(data) {
          console.log(data)
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    IceCreamsFactory.delete = function(id){
      $http.delete('/api/icecreams/' + id)
        .success(function(data) {
          console.log('success');
        })
        .error(function(data) {
          console.log('Error: ' + data)
        });
    };

    return IceCreamsFactory;
  }
})();
