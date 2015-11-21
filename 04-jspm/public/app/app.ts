// importamos la librería de angular2
import {bootstrap, Component, View} from 'angular2/angular2';

// configuramos la aplicación
@Component({
	selector: 'app'
})
@View({
	template: `{{algo}} 
		<br>
		<input type="button" 
		(click)="agregarAlgo(camina);" value="Clickeame"/>
	`
})
class Application {
	camina;
	algo;
	constructor () {
		var mascota = 'Teo';
		this.camina = ' Clack';
		this.algo = `
			Mi mascota
			es
			${mascota}
		`;
	}
	agregarAlgo (contenido) {
		this.algo += contenido;
	}
}

// iniciamos la aplicación
bootstrap(Application, [])
.then(function () {
	console.log('Se inicio angular');
})
.catch(function (error) {
	console.error(error);
});