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
    
    var masterIndex = 0;
    var rowColCount = 2

    var map = {
    	'0' : 'batman.gif',
    	'1' : 'courage.gif',
    	'2' : 'dexter.gif',
    	'3' : 'calvinhobbes.jpeg',
    	'4' : 'captainplanet.gif',
    	'5' : 'dragonballz.gif',
    	'6' : 'popeye.gif',
    	'7' : 'swatkats.gif',
    	'8' : 'tom&jerry.gif'
    };

    function init() {
        $scope.max = 1;
        $scope.master = [];
        $scope.arrNum = [0, 1, 2, 3];
        $scope.test = {};
        $scope.test.arr = [0,1];
        var arr = shuffleArray($scope.arrNum);
        create2DArray(arr);
    }

    $scope.clickme = function() {
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

    function create1DArray() {
        var arr = [];
        $scope.$apply(function() {
            $scope.test.arr = arr;
        })
        var arrNum = [];
    	var len = rowColCount;
    	for(var i=0;i<len;i++) arr.push(i);
    	for(var i=0;i<len * len;i++) arrNum.push(i);

        $scope.arrNum = arrNum;
        $scope.$apply(function() {
            $scope.test.arr = arr;
        })

    }

    function create2DArray(shuffledArray) {
    	console.log(shuffledArray);
    	var count = 0;
    	$scope.master = [];

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
    	if(index === containersArr.length) {
    		renderDraggableImage();
    		return;
    	}

        $(containersArr[index]).click(function() {
                var currName = $('#dragDropImg').find('img').attr("name");
                var selectedName = $(this).attr("name");
                if(currName == selectedName) {
                    alert("success");
                    masterIndex++;
                    renderDraggableImage();
                }
                else alert("failure");
        });

    	$(containersArr[index]).css('transform', 'rotateY(180deg)');
    	setTimeout(function() {
    		$(containersArr[index]).css('transform', 'rotateY(0deg)');
    		flipImages(containersArr, index + 1);
    	}, 1000)
    }

    function renderDraggableImage() {
    	if(masterIndex == $scope.arrNum.length) {
    		$scope.max++;
    		masterIndex = 0;
    		rowColCount++;
    		create1DArray();
    		var arr = shuffleArray();
   			create2DArray(arr);
    	}
    	$('#dragDropImg').find('img').attr("src","images/" + map[masterIndex]);
    	$('#dragDropImg').find('img').attr("name", map[masterIndex])
    }

    init();
   	
  });
