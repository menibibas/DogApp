app.controller("breedsCtrl", function ($scope, $http, $routeParams) {
    
    function Breed(name, image) {
        this.name = name;
        this.image = image;
    }


    $scope.breeds = [];
    $http.get("breeds.json").then(function (res) {
        // on success
        $scope.breeds = [];
        for (var i = 0; i < res.data.length; i++) {
            var breed = new Breed(res.data[i].name, res.data[i].image);
            $scope.breeds.push(breed);
        }
    }, function (err) {
        console.error(err);

    })
});