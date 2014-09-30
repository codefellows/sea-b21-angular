require('angular/angular');
require('angular-route')

var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.controller('firstController', function($scope) {
  $scope.greeting = 'Hello World';
});

demoApp.controller('awesomeController', function($scope) {
  $scope.awesomeThings = ['unicorns', 'rainbows', 'magic'];
});

demoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/awesome', {
      templateUrl: 'views/awesome.html',
      controller: 'awesomeController'
    })
    .otherwise({
      redirectTo: '/awesome'
    });
}])
