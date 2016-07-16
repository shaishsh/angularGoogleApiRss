angularRSSTest
.directive('feedData', function($sce){
	return {
		restrict: 'E',
		scope: {
      		feed: '=feedData'
    	},
		template: '<div class="panel panel-primary"><div class="panel-heading">{{ feed.title }}</div><div class="panel-body" ng-bind-html="feedContentHtml"></div><div class="panel-footer">{{ feed.publishedDate | date : "M/d/yy h:mm a" : timezone}}</div></div>',
		link: function(scope, elm, attr){
			var stringToParse = scope.feed.content;
			scope.feedContentHtml = $sce.trustAsHtml(stringToParse);
		}
	};
});
