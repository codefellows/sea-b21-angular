require('angular/angular');

var demoApp = angular.module('demoApp', []);
demoApp.controller('firstController', function($scope) {
  $scope.greeting = 'Hello World';
});
