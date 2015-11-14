// importamos la librería de angular2
import * as angular from 'angular2/angular2';

// configuramos la aplicación
var Application = angular.Component({
	selector: 'app'
})
.View({
	template: 'Hola mundo {{algo}}'
})
.Class({
	constructor: function () {
		this.algo = 'Contenido';
	}
});

// iniciamos la aplicación
angular.bootstrap(Application, [])
.then(function () {
	console.log('Se inicio angular');
})
.catch(function (error) {
	console.error(error);
});