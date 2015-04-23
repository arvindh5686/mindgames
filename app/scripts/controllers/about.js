'use strict';

/**
 * @ngdoc function
 * @name mindgamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mindgamesApp
 */
angular.module('mindgamesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
