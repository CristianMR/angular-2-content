// importamos los componentes a utilizar
import {Component, View} from 'angular2/core';

import {NgFor, NgStyle} from 'angular2/common';

import {RealzadorDirective} from 'components/miRealzador/miRealzador';

// configuramos la aplicación
@Component({
	selector: 'app'
})
@View({
	template: `
    <div *ngFor="#auto of autos;" miRealzador>
      <span [ngStyle]="{'font-size': letraGrande, color: auto.color}">
        Marca: <strong>{{auto.marca}}</strong>
      </span>
      <img [src]="auto.logo" alt="" [ngStyle]="{display: auto.mostrarLogo ? '' : 'none'}"/>
      <label>
        Mostrar <input type="checkbox" [checked]="auto.mostrarLogo" (change)="auto.mostrarLogo = $event.target.checked"/>
      </label>
      <label>
        Color <input type="text" [value]="auto.color || ''" (keyup)="auto.color = $event.target.value"/>
      </label>
    </div>
	`,
  directives: [NgFor, NgStyle, RealzadorDirective]
})
export class Application {
	autos;
  letraGrande = '20px';
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