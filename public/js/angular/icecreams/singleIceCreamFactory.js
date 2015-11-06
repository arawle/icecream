(function() {
  'use strict';

  angular
    .module('myapp')
    .factory('SingleIceCreamFactory', SingleIceCreamFactory);

  SingleIceCreamFactory.$inject = ['$http'];

  function SingleIceCreamFactory ($http){
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

    SingleIceCreamFactory.editIceCream = function(icecream){
      console.log(icecream)
      $http.put('api/icecreams/' + icecream._id, icecream)
        .success(function(data){
          console.log('success')
        })
        .error(function(data) {
          console.log('Error: ' + data)
        });
    };

    return SingleIceCreamFactory;
  }
})();

