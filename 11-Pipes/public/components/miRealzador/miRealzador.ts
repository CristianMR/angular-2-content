import {Directive, ElementRef, Renderer, Input, Output, EventEmitter} from 'angular2/core';

@Directive({
  selector: '[miRealzador]',
  host: {
    '(mouseenter)': 'onMouseEntro()',
    '(mouseleave)': 'onMouseSalio()'
  }
})
export class RealzadorDirective {
  @Input('miRealzador') colorARealzar;
  @Output() mouseEntro: EventEmitter<any> = new EventEmitter();
  @Output() mouseSalio: EventEmitter<any> = new EventEmitter();
  
  private _colorPorDefecto = '#e56767';
  @Input() set colorPorDefecto (valor: string) {
    this._colorPorDefecto = valor || this._colorPorDefecto;
  }
  
  constructor(private elemento: ElementRef, private renderizador: Renderer) {}
  
  onMouseEntro () {
    this._resaltar(this.colorARealzar || this._colorPorDefecto);
    this.mouseEntro.emit(null);
  }
  
  onMouseSalio () {
    this._resaltar(null);
    this.mouseSalio.emit(null);
  }
  
  private _resaltar (color) {
    this.renderizador.setElementStyle(this.elemento, 'backgroundColor', color);
  }
}