import { Directive } from '@angular/core';

@Directive({
  selector: '[upperCase]',
  host: {
    "(input)": 'onInputChange($event)'
  }
})
export class UpperCaseDirective {

  constructor() { }
  onInputChange(event) {
    event.target.value = event.target.value.toUpperCase();
    /* event.target.value += String.fromCharCode(!event.charCode ? event.which : event.charCode).toUpperCase();
     return false;*/
  }
}

