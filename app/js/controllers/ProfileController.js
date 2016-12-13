app.controller("ProfileController", function($scope, $route){
	$scope.success = false;
	$scope.failed = false;

	$scope.submit = function(){
		if($scope.profileForm.$valid){
			$scope.success = true;
			$scope.failed = false;
			$scope.profileForm.$setPristine();
			$scope.profileForm.$setUntouched();
		} else {
			$scope.failed = true;
			$scope.success = false;
		}
	}

});