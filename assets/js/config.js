angular.module('TTS', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'index.html',
		controller: 'MainCtrl'
	})
});

.controller('MainCtrl', ['$scope', function($scope){
	$scope.message = "Hello I am working";
}])