(function() {

  var app = angular.module("fWapp");

  var ContactController = function($scope, $routeParams, $http) {

    $http.get('/js/data/gems.json').success(function(data){
   angular.forEach(data, function(item) {
     if (item.sku == $routeParams.skuid)
       $scope.info = item;
   });
});

};

  app.controller("ContactController", ContactController);

}());
