angular.module('ttsApp')

.controller('StaffModalCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log){

	$scope.open = function(staff){
		var $modalInstance = $modal.open({
			templateUrl: 'views/modal_windows/staff_modal.html',
			controller: 'StaffModalInstanceCtrl',
			resolve: {
				staff: function(){
					return $scope.staff;
				}//function
			}//resolve
		});//modalInstance

		$modalInstance.result.then(function() {
			$log.info('Modal dismissed at: ' + new Date());
		});//modalInstance
	} //scope.open
	
}])

.controller('StaffModalInstanceCtrl', ['$scope', '$modalInstance', 'staff', function($scope, $modalInstance, staff){

	$scope.staff = staff;


	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	};
}])