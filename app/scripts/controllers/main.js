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
    
    var imagesIndexArr = 0;
    var map = {};
    var images = ['batman.gif',
                  'courage.gif',
                  'dexter.gif',
                  'calvinhobbes.jpeg',
                  'captainplanet.gif',
                  'dragonballz.gif',
                  'popeye.gif',
                  'swatkats.gif',
                  'tom&jerry.gif'
                    ];

    function createMap() {
        var arr = shuffleArray(images);
        for(var i=0;i<arr.length;i++) map[i] = arr[i];
    }

    function init() {
        $scope.master = [];
        $scope.imagesIndexArr = [0, 1, 2, 3];
        $scope.rowColIndex = {};
        $scope.rowColIndex.arr = [0,1];
        $scope.max = $scope.rowColIndex.arr.length;
        $scope.disabled = false;

        createMap();
        var arr = shuffleArray($scope.imagesIndexArr);
        create2DArray(arr);
    }

    $scope.clickme = function() {
        $scope.disabled = true;
    	var containersArr = shuffleArray($('.main_container .main_card'));
    	flipImages(containersArr, 0);
    }

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
            $scope.rowColIndex.arr = arr;
        });
        var imagesIndexArr = [];
    	for(var i=0;i<$scope.max;i++) arr.push(i);
    	for(var i=0;i<$scope.max * $scope.max;i++) imagesIndexArr.push(i);

        $scope.imagesIndexArr = imagesIndexArr;
        $scope.$apply(function() {
            $scope.rowColIndex.arr = arr;
        })

    }

    function create2DArray(shuffledArray) {
    	console.log(shuffledArray);
    	var count = 0;
    	$scope.master = [];

    	for(var i=0;i<$scope.max;i++) {
    		var arr = [];
    		for(var j=0;j<$scope.max;j++) {
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

                var currName = $('#dragDropImg').find('img').attr('name');
                var selectedName = $(this).attr('name');
                if(currName === selectedName) {
                    $('#dragDropImg').find('img').addClass('imageclick');
                    var degree = (index + 1) * 360;
                    $('#dragDropImg').find('img').css('-webkit-transform', 'rotateZ(' + degree + 'deg)');
                    imagesIndexArr++;
                    renderDraggableImage();
                }
                else alert('failure');
        });

    	$(containersArr[index]).css('transform', 'rotateY(180deg)');
    	setTimeout(function() {
    		$(containersArr[index]).css('transform', 'rotateY(0deg)');
    		flipImages(containersArr, index + 1);
    	}, 1000)
    }

    function renderDraggableImage() {
    	if(imagesIndexArr == $scope.imagesIndexArr.length) {
            $scope.disabled = false;
            $('#dragDropImg').find('img').attr("src","");
    		if($scope.max < 3) $scope.max++;
    		imagesIndexArr = 0;
    		create1DArray();
    		var arr = shuffleArray($scope.imagesIndexArr);
   			create2DArray(arr);
    	} else {
            $('#dragDropImg').find('img').attr("src","images/" + map[imagesIndexArr]);
            $('#dragDropImg').find('img').attr("name", map[imagesIndexArr])
        }
    }

    init();
   	
  });
