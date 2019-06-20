var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  
    $routeProvider.
      when("/", {
        templateUrl: "home.html",
      }).when("/", {
        templateUrl: "index.html",
        controller: "indexCtrl"
      }).when("/breeds", {
         templateUrl: "breeds.html",
         controller: "breedsCtrl"
        }).when("/breeds/:id", {
          templateUrl: "breedDetails.html",
          controller: "breedDetailsCtrl"
      });
    
  })