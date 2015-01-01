(function (){

$(document).ready(function() {
	
	$('.navbar-toggle').on('click', function() {
		$(this).toggleClass('active')
		console.log('gag')
	})

});

angular.module('infocomp', ['ngRoute', 'infocomp.controllers'])

//Acesso a las plantillas que serán incrustadas en el html
.config(function($routeProvider) {
	$routeProvider
		//Página de INICIO
		.when('/inicio', {
			templateUrl : 'paginas/inicio.html',
			controller  : 'InicioCtrl'
		})
		//CARRERAS
		.when('/carreras', {
			templateUrl : 'paginas/carreras.html',
			controller  : 'CarrerasCtrl'
		})
		//PROYECTOS
		.when('/proyectos', {
			templateUrl : 'paginas/proyectos.html',
			controller  : 'ProyectosCtrl'
		})
		//DOCENTES
		.when('/docentes', {
			templateUrl : 'paginas/docentes.html',
			controller  : 'DocentesCtrl'
		})
		//TRANSPARENCIA
		.when('/transparencia', {
			templateUrl : 'paginas/transparencia.html',
			controller  : 'TransparenciaCtrl'
		})
		//INFOCOMP
		.when('/infocomp', {
			templateUrl : 'paginas/infocomp.html',
			controller  : 'InfocompCtrl'
		})
	    .otherwise({
	        redirectTo: '/inicio'
	    });
})
})()