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
    $scope.scores = [5, 6, 3, 9];

    function shuffleArray(arr) {
    	arr = $scope.scores;
    	var len = arr.length;

    	for(var i=len-1; i>=0; i--) {
    		var randNum = Math.floor((Math.random() * i) + 1);
    		var temp = arr[randNum];
    		arr[randNum] = arr[i];
    		arr[i] = temp;
    	}

    	console.log(arr);
    }

   	shuffleArray();
  });
