'use strict';

/**
 * @ngdoc function
 * @name mindgamesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mindgamesApp
 */
angular.module('mindgamesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
