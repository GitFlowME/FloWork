(function() {

    var app = angular.module("fWapp", ["ngRoute"]);

    var GlobalController = function($scope, $http, $routeParams, $sce) {
        //Site Name
        $scope.SiteName = "FloWork";
        // Navigation
        $scope.urlNavHome = "/#/";
        $scope.urlNavLink2 = "/#/About";
        $scope.urlNavLink3 = "/#/Contact";
        $scope.urlNavLink4 = "/#/";

        // Images for slider
        $scope.imgSlider = "images/slider-one.jpg";
        $scope.imgSlider2 = "images/slider-two.jpg";
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
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(false);
    })

}());
