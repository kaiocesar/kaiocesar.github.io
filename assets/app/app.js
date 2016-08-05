angular.module('app', ['ngRoute', 'ngResource'])
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'assets/app/views/about.html',
				controller: 'CtrlHome'
			})
			.when('/projetos', {
				templateUrl: 'assets/app/views/projetos.html'
			})
			.when('/contatos', {
				templateUrl: 'assets/app/views/contatos.html'
			})
			.when('/about',{
				templateUrl: 'assets/app/views/about.html'
			});
	})
	.controller('CtrlHome', ['$scope', '$resource', function($scope, $resource){

	}]);