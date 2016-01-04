import {Pipe} from 'angular2/core';

@Pipe({
  name: 'porNombre'
})
export class PorNombrePipe {
  transform (values: Array<any>, [campo, nombre]) {
    return values.filter(function (objeto) {
      return objeto[campo].indexOf(nombre) != -1;
    });
  }
}