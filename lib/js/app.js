(function() {

    var app = angular.module("fWapp", ["ngRoute"]);

    var GlobalController = function($scope, $http, $routeParams, $sce) {
        $scope.SiteName = "Your-FloWork";

        $scope.MenuTitle0 = "Home";
        $scope.MenuTitle1 = "About";
        $scope.MenuTitle2 = "Contact";
        $scope.MenuTitle3 = "More";

        $scope.MenUrl0 = "/";
        $scope.MenUrl1 = "/About";
        $scope.MenUrl2 = "/Contact";
        $scope.MenUrl3 = "/More";

        $scope.SliderIMG0 = "images/slider-one.jpg";
        $scope.SliderIMG1 = "images/slider-two.jpg";
    };

    app.controller("GlobalController", GlobalController);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "templates/main.html",
            })

            .when("/About", {
                templateUrl: "templates/about.html",
                controller: "AboutController"
            })
            .when("/Contact", {
                templateUrl: "templates/contact.html",
                controller: "ContactController"
            })
            .when("/Portfolio", {
                templateUrl: "templates/portfolio.html",
                controller: "PortfolioController"
            })
            .when("/Clients", {
                templateUrl: "templates/clients.html",
                controller: "ClientsController"
            })
            .otherwise({
                redirectTo: "/"
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })

}());
