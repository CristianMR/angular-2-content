// importamos los componentes a utilizar
import {Component, View} from 'angular2/core';

import {NgFor, NgStyle} from 'angular2/common';

import {AutoDirective} from 'components/miAuto/miAuto';

import {RealzadorDirective} from 'components/miRealzador/miRealzador';

// configuramos la aplicación
@Component({
	selector: 'app'
})
@View({
	template: `
    <div *ngFor="#auto of autos;" [miRealzador]="auto.color" [colorPorDefecto]="auto.colorPorDefectoManzana"
         (mouseEntro)="elAuto.soyElAmo()" (mouseSalio)="elAuto.noSoyElAmo()">
      <miAuto #elAuto [info]="auto" [letraMarca]="letraGrande"></miAuto>
    </div>
	`,
  directives: [NgFor, NgStyle, AutoDirective, RealzadorDirective]
})
export class Application {
	autos;
  letraGrande = '20px';
	constructor () {
		this.autos = [
      {
        marca: 'Ford',
        mostrarLogo: false,
        logo: 'http://www.freetexturesblueprints.com/albums/userpics/10001/thumb_ford-logo.jpg',
        colorPorDefectoManzana: 'green'
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