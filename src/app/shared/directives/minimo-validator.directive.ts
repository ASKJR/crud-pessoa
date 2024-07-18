import { Directive, Input } from '@angular/core';
import {
  FormControl,
  ValidationErrors,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';

@Directive({
  selector: '[minimo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoValidatorDirective,
      multi: true,
    },
  ],
})
export class MinimoValidatorDirective implements Validator {
  constructor() {}
  @Input('valorMinimo') valorMinimo = '0';
  validate(control: FormControl): ValidationErrors | null {
    let value = +control.value;
    let min = isNaN(+this.valorMinimo) ? 0 : +this.valorMinimo;
    if (isNaN(value) || value < min)
      return { minimo: true, requiredValue: min };
    return null;
  }
}
