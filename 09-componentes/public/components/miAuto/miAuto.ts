import {Component, View, Input} from 'angular2/core';

@Component({
  selector: 'miAuto'
})
@View({
  templateUrl: 'components/miAuto/miAuto.html',
  styles: [
    `
      label {
        color: blue;
      }
      strong {
        text-decoration: underline;
      }
    `
  ]
})
export class AutoDirective {
  @Input('info') auto;
  @Input('letraMarca') letraGrande;
}