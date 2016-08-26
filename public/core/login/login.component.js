angular
	.module('modlogin')
	.component('login', {
		templateUrl: 'public/core/login/login.template.html',
		controller: function LoginController($scope, $http) {
			$scope.user = ""
			$scope.pass = ""

			$scope.token = "None"

			$scope.go = function(){
				console.log("User: " + $scope.user + " Pass: " + $scope.pass)

				// Simple GET request example:
				$http({
				  method: 'POST',
				  url: '/auth',
				  data: {user: $scope.user, pass: $scope.pass}
				}).then(function successCallback(response) {
					$scope.token = response.data
					//$state.go('private')
					//console.log('Oj0!!')
				  }, function errorCallback(response) {
					$scope.token = ""
				  });
			}
		}
	})
