// Define the `phonecatApp` module
var app = angular.module('App', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('LoginCtrl', function LoginController($scope, $http) {
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
		  }, function errorCallback(response) {
			$scope.token = ""
		  });
	}
});
