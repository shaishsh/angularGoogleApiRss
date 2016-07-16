angularRSSTest
.controller('mainController', ['$scope', 'rssFactory', '$routeParams', '$location', '$route', function($scope, rssFactory, $routeParams, $location, $route){

	$scope.rssList = localStorage.rss? JSON.parse(localStorage.rss): [];
	$scope.selectedUrl = null;
	$scope.rssNum = 5;
	
	$scope.setActiveButton = function(index){
		$scope.activeButton = index;
	};

	
	$scope.getActiveButton = function(index){
		return $scope.activeButton == index;
	};	

    	if($routeParams.rssIndex && $scope.rssList[$routeParams.rssIndex] != null){
		var index = $routeParams.rssIndex;
		$scope.setActiveButton(index);	
    		getFeedData(index);	
    	}
	
	function getFeedData(rssIndex){
		$scope.selectedUrl = $scope.rssList[rssIndex];
    		rssFactory.fetch({q: $scope.selectedUrl, num: $scope.rssNum}, {}, function (data) {
		$scope.currentFeed = data.responseData.feed.entries;
    		});	
	};

	$scope.pushUrlToRssList = function(rssUrl){
		$scope.rssList.unshift(rssUrl);
		localStorage.rss = JSON.stringify($scope.rssList);
		$scope.setActiveButton(0);
		$location.path("/0");
		$route.reload();
	};

	$scope.removeUrlFromRssList = function(index){
		$scope.rssList.splice(index, 1);
		localStorage.rss = JSON.stringify($scope.rssList);
	};
	
	

}]);
