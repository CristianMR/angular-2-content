import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
  selector: '[miRealzador]',
  host: {
    '(mouseenter)': 'onMouseEntro()',
    '(keyup)': 'onMouseEntro()',
    '(mouseleave)': 'onMouseSalio()'
  }
})
export class RealzadorDirective {
  @Input('miRealzador') colorARealzar;
  
  private _colorPorDefecto = '#e56767';
  @Input() set colorPorDefecto (valor: string) {
    this._colorPorDefecto = valor || this._colorPorDefecto;
  }
  
  constructor(private elemento: ElementRef, private renderizador: Renderer) {}
  
  onMouseEntro () {
    this._resaltar(this.colorARealzar || this._colorPorDefecto);
  }
  
  onMouseSalio () {
    this._resaltar(null);
  }
  
  private _resaltar (color) {
    this.renderizador.setElementStyle(this.elemento, 'backgroundColor', color);
  }
}