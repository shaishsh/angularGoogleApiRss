angularRSSTest
.config(function($routeProvider){
	$routeProvider
	.when('/', {
        templateUrl : './route/template/mainController.html',
        controller  : 'mainController'
    })
    .when('/:rssIndex', {
    	templateUrl : './route/template/mainController.html',
        controller  : 'mainController'
    })
    .otherwise({
        redirectTo: '/'
      });
});

