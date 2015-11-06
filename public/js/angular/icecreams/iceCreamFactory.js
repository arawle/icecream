(function() {
  'use strict';

  angular
    .module('myapp')
    .factory('IceCreamFactory', IceCreamFactory);

  IceCreamFactory.$inject = ['$http'];

  function IceCreamFactory ($http){
    var IceCreamFactory = {};

    IceCreamFactory.icecream = [];

    IceCreamFactory.findById = function(id){
      var icecream = 'api/icecreams/' + id;
      IceCreamFactory.icecream = [];

      $http.get(icecream)
        .success(function(data) {
          IceCreamFactory.icecream.push(data);
        })
        .error(function(data) {
          console.log('Error: ' + data)
        });
    };

    IceCreamFactory.editIceCream = function(icecream){
      console.log(icecream)
      $http.put('api/icecreams/' + icecream._id, icecream)
        .success(function(data){
          console.log('success')
        })
        .error(function(data) {
          console.log('Error: ' + data)
        });
    };

    return IceCreamFactory;
  }
})();
