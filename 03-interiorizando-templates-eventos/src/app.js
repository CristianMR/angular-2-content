// importamos la librería de angular2
import * as angular from 'angular2/angular2';

// configuramos la aplicación
var Application = angular.Component({
	selector: 'app'
})
.View({
	template: `{{algo}} 
		<br>
		<input type="button" 
		(click)="agregarAlgo(camina);" value="Clickeame"/>
	`
})
.Class({
	constructor: function () {
		var mascota = 'Teo';
		this.camina = ' Clack';
		this.algo = `
			Mi mascota
			es
			${mascota}
		`;
	},
	agregarAlgo: function (contenido) {
		this.algo += contenido;
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