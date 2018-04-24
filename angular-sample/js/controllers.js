'use strict'

tempApp.controller('currentCtrl', ['$scope', function($scope){
	$scope.temp = -1;
}])

tempApp.controller('historyCtrl',['$scope',function($scope){
	$scope.text = 'this is history page!';
	$scope.historyData = [
		{ day: 'saturday', temp: 8},
		{ day: 'sunday', temp: 13},
		{ day: 'monday',temp: 15},
		{ day: 'tuesday', temp: 11},
		{ day: 'wednesday',temp: 15},
		{ day: 'thursday',temp: 17},
		{ day: 'friday',temp: 21}
		];

}]);