app.controller("breedDetailsCtrl", function($scope, $log, $routeParams, $q) {
  
    // Calling the service to get the car with the index
    // Notice how we are accessing $routeParams.id to get the dynamic part in the URL
    breeds.getBreedByIndex($routeParams.id).then(function(breed) {
        $scope.breed = breed;
      }, function(err) {
        $log.error(err);
      });
   
   
    function getBreedByIndex(index) {
        var async = $q.defer();
    
        // Getting all the cars and returning a single car by its index in the array
        getBreeds().then(function(breeds) {
          if (index >= breeds.length) {
            async.reject("Index out of bounds")
          }
          
          async.resolve(breeds[index]);
        }, function(err) {
          async.reject(err);
        })
    
        return async.promise;
      }
    
      // $scope.cars = [];
      // $http.get("cars.json").then(function(res) {
      //   // on success
      //   for (var i = 0; i < res.data.length; i++) {
      //     var car = new Car(res.data[i]);
      //     $scope.cars.push(car);
      //   }
      // }, function(err) {
      //   $log.error(err);
      // })  
    
    
      return {
        getBreeds: getBreeds,
        getBreedByIndex: getBreedByIndex
      }
    
   
   
   
   
   
    

    
    
  });