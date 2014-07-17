angular.module('ttsApp')

.controller('InstructorModalCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log){

	$scope.open = function(instructor){
		var $modalInstance = $modal.open({
			templateUrl: 'views/modal_windows/instructor_modal.html',
			controller: 'InstructorModalInstanceCtrl',
			resolve: {
				instructor: function(){
					return $scope.instructor;
				}//function
			}//resolve
		});//modalInstance

		$modalInstance.result.then(function() {
			$log.info('Modal dismissed at: ' + new Date());
		});//modalInstance
	} //scope.open
	
}])

.controller('InstructorModalInstanceCtrl', ['$scope', '$modalInstance', 'instructor', function($scope, $modalInstance, instructor){

	$scope.instructor = instructor;


	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	};
}])