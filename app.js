var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  
    $routeProvider.
      when("/", {
        templateUrl: "home.html",
        controller: "homeCtrl"
      }).when("/breeds", {
         templateUrl: "breeds.html",
         controller: "breedsCtrl"
        }).when("/breeds/:id", {
          templateUrl: "breedDetails.html",
          controller: "breedDetailsCtrl"
      });
    
  })