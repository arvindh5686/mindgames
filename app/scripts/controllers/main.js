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
    var masterIndex = 0
    
    var map = {
    	'0' : 'batman.gif',
    	'1' : 'courage.gif',
    	'2' : 'dexter.gif',
    	'3' : 'calvinhobbes.jpeg'
    };

    $scope.clickme = function() {
    	//alert("1");
    	var containersArr = shuffleArray($('.main_container .main_card'));
    	flipImages(containersArr, 0);
    }

    $scope.range = function(min, max, step){
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) {
	    	input.push(i);
	    }
	    return input;
  	};

    function shuffleArray(arr) {
    	var len = arr.length;

    	for(var i=len-1; i>=0; i--) {
    		var randNum = Math.floor((Math.random() * i) + 1);
    		var temp = arr[randNum];
    		arr[randNum] = arr[i];
    		arr[i] = temp;
    	}

    	console.log(arr);
    	return arr;
    }

    
    function create2DArray(shuffledArray) {
    	console.log(shuffledArray);
    	var count = 0;
    	for(var i=0;i<=$scope.max;i++) {
    		var arr = [];
    		for(var j=0;j<=$scope.max;j++) {
    			arr.push(map[shuffledArray[count++]]);
    		}
    		$scope.master.push(arr);
    	}

    	console.log($scope.master);
    }

    function flipImages(containersArr, index) {
    	if(index === arr.length) {
    		addClickEvent();
    		renderDraggableImage();
    		return;
    	}
    	$(containersArr[index]).css('transform', 'rotateY(180deg)');
    	setTimeout(function() {
    		$(containersArr[index]).css('transform', 'rotateY(0deg)');
    		flipImages(containersArr, index + 1);
    	}, 1000)
    }

    function addClickEvent() {
    	var containersArr = shuffleArray($('.main_container .main_card'));
    	for(var i=0;i<containersArr.length;i++) {
    		$(containersArr[i]).click(function() {
    			var currName = $('#dragDropImg').find('img').attr("name");
    			var selectedName = $(this).attr("name");
    			if(currName == selectedName) {
    				alert("success");
    				masterIndex++;
    				renderDraggableImage();
    			}
    			else alert("failure");
    		})
    	}
    }

    function renderDraggableImage() {
    	$('#dragDropImg').find('img').attr("src","images/" + map[masterIndex]);
    	$('#dragDropImg').find('img').attr("name", map[masterIndex])
    }

   	var arr = shuffleArray($scope.scores);
   	create2DArray(arr);
  });
