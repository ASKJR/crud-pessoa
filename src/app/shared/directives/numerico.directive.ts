import { Directive, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numerico]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericoDirective,
      multi: true,
    },
  ],
})
export class NumericoDirective implements ControlValueAccessor {
  onChange: any = () => {};
  onTouched: any = () => {};
  constructor(private el: ElementRef) {}

  writeValue(value: any): void {
    this.el.nativeElement.value = value || ''; // Initialize as empty string if value is undefined
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    //remove não numéricos
    valor = valor.replace(/[\D]/g, '');
    $event.target.value = valor;
    this.onChange(valor);
  }
}
