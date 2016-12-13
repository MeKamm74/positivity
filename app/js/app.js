var app = angular.module("app", ["ngRoute", "ngMaterial"]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when("/profile", {
			templateUrl: "../views/profile.html",
			controller: "ProfileController"
		})
}]);