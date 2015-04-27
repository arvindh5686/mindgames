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
    $scope.max = 1;
    $scope.master = [];
    $scope.scores = [0, 1, 2, 3];
    $scope.shuffledArray = [];

    var map = {
    	'0' : 'batman.gif',
    	'1' : 'courage.gif',
    	'2' : 'dexter.gif',
    	'3' : 'calvinhobbes.jpeg'
    };

    $scope.range = function(min, max, step){
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) {
	    	input.push(i);
	    }
	    return input;
  	};

    function shuffleArray(arr) {
    	arr = $scope.scores;
    	var len = arr.length;

    	for(var i=len-1; i>=0; i--) {
    		var randNum = Math.floor((Math.random() * i) + 1);
    		var temp = arr[randNum];
    		arr[randNum] = arr[i];
    		arr[i] = temp;
    	}

    	$scope.shuffledArray = arr;
    	console.log(arr);
    	create2DArray();
    }

    
    function create2DArray() {
    	var count = 0;
    	for(var i=0;i<=$scope.max;i++) {
    		var arr = [];
    		for(var j=0;j<=$scope.max;j++) {
    			arr.push(map[$scope.shuffledArray[count++]]);
    		}
    		$scope.master.push(arr);
    	}

    	console.log($scope.master);
    }

   	shuffleArray();
  });
