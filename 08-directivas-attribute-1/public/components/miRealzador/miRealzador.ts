import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[miRealzador]',
  host: {
    '(mouseenter)': 'onMouseEntro()',
    '(mouseleave)': 'onMouseSalio()'
  }
})
export class RealzadorDirective {
  private _colorPorDefecto = '#e56767';
  
  constructor(private elemento: ElementRef, private renderizador: Renderer) {}
  
  onMouseEntro () {
    this._resaltar(this._colorPorDefecto);
  }
  
  onMouseSalio () {
    this._resaltar(null);
  }
  
  private _resaltar (color) {
    this.renderizador.setElementStyle(this.elemento, 'backgroundColor', color);
  }
}