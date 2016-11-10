var app = angular.module('app', ['ngRoute']);

app.directive('classSelect', function() {
	return {
		retrict: 'E',
        replace: true,
        scope: {model:'='},
		link: function(scope, element, attr) {
			element.on('change', function(){
                var class_name = document.getElementById("class").value;
                console.log(class_name);
                scope.model[details[7][value]] = class_name;
                var new_row = {
                    field: class_options[class_name],
                    value: []
                };
                scope.model[details].push(new_row);
                scope.$apply();
            })
        }
    }
});

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