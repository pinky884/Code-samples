var tempApp = angular.module("tempApp",['ui.router'])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	$routeProvider.when('/current',{
		templateUrl:'/partials/current.html',
		controller: 'currentCtrl'
	});
	$routeProvider.when('/history',{
		templateUrl: '/partials/history.html',
		controller: 'historyCtrl'
	});
	$routeProvider.otherwise({redirect: '/current'});
}])
.filter('temparatureFilter',[function(){
	return function(tempArray){
		console.log("---inside filter----");
		var filteredArray = [];
		angular.forEach(tempArray,function(value,key){
			console.log("--forEach--- " + value);
			if(value.temp >= 15){
				console.log("temp to return = " + temp);
				filteredArray.push(value);
			}
		});
		return filteredArray;
	};
}]);