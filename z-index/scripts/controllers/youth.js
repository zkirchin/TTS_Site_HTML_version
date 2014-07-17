angular.module('ttsApp')

.controller('YouthCampCtrl', ['$scope', function($scope){

	$scope.galleries = [
	{
		'title': 'Learn',
		'image': 'assets/img/pr01.jpg',
	},
	{
		'title': 'Grow',
		'image': 'assets/img/pr02.jpg',
	},
	{
		'title': 'Build',
		'image': 'assets/img/pr03.jpg',
	}

	];
	

}])