// importamos los componentes a utilizar
import {Component, View} from 'angular2/core';

import {NgFor} from 'angular2/common';

// configuramos la aplicación
@Component({
	selector: 'app'
})
@View({
	template: `
    <div *ngFor="#auto of autos;">
      Marca: <strong>{{auto.marca}}</strong>
      <img [src]="auto.logo" alt="" [hidden]="auto.mostrarLogo"/>
      <button (click)="mostrarUOcultar(auto)">Mostrar u ocultar</button>
    </div>
	`,
  directives: [NgFor]
})
export class Application {
	autos;
	constructor () {
		this.autos = [
      {
        marca: 'Ford',
        mostrarLogo: false,
        logo: 'http://www.freetexturesblueprints.com/albums/userpics/10001/thumb_ford-logo.jpg'
      },
      {
        marca: 'Renault',
        mostrarLogo: false,
        logo: 'http://4.bp.blogspot.com/-BuXfWyjJJZE/VSu48XbFs0I/AAAAAAAAjuU/ygSXXgvWi5U/s128/Renault-logo-2007.png'
      },
      {
        marca: 'Peugeot',
        mostrarLogo: false,
        logo: 'http://www.ibizavipcars.com/img/trademarks/Peugeot_128.png'
      }
    ];
	}
  mostrarUOcultar (auto) {
    auto.mostrarLogo = !auto.mostrarLogo;
  }
}