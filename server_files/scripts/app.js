var app = angular.module('app', ['ngRoute']);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'home',
            templateUrl: 'partials/home.html'
        })
        .when('/login', {
            controller: 'login',
            templateUrl: 'partials/login.html'
        })
        .when('/dashboard', {
            controller: 'dashboard',
            templateUrl: 'partials/dashboard.html'
        })
        .when('/creator', {
            controller: 'creator',
            templateUrl: 'partials/creator.html'
        })
        .when('/dmtools', {
            controller: 'dmtools',
            templateUrl: 'partials/dmtools.html'
        })
        .when('/aboutus', {
            controller: 'aboutus',
            templateUrl: 'partials/aboutus.html'
        })
        .otherwise('/');
}]);