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
      <img [src]="auto.logo" alt="" [hidden]="!auto.mostrarLogo"/>
      <label>
        Mostrar <input type="checkbox" [checked]="auto.mostrarLogo" (change)="auto.mostrarLogo = $event.target.checked"/>
      </label>
      <label>
        Marca <input type="text" [value]="auto.marca" (keyup)="auto.marca = $event.target.value"/>
      </label>
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
        mostrarLogo: true,
        logo: 'http://4.bp.blogspot.com/-BuXfWyjJJZE/VSu48XbFs0I/AAAAAAAAjuU/ygSXXgvWi5U/s128/Renault-logo-2007.png'
      },
      {
        marca: 'Peugeot',
        mostrarLogo: false,
        logo: 'http://www.ibizavipcars.com/img/trademarks/Peugeot_128.png'
      }
    ];
	}
}