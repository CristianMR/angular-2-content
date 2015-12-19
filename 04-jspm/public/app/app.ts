// importamos los componentes a utilizar
import {Component, View} from 'angular2/core';

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
export class Application {
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