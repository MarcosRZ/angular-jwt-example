// Define the `phonecatApp` module
var app = angular.module('App', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('LoginCtrl', function LoginController($scope, $http) {
	$scope.user = ""
	$scope.pass = ""

	$scope.go = function(){
		console.log("User: " + $scope.user + " Pass: " + $scope.pass)

		// Simple GET request example:
		$http({
		  method: 'POST',
		  url: 'http://localhost:3001/auth',
		  data: {user: $scope.user, pass: $scope.pass}
		}).then(function successCallback(response) {
			alert("Success!")
		  }, function errorCallback(response) {
			alert("Failure!")
		  });
	}
});
