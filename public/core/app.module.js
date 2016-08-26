var app = angular.module('App', ['modlogin', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/",
      component: 'login'
    })
    .state('private', {
      url: "/private",
      templateUrl: "public/core/private/private.template.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    });
});
