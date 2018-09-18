import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, prefix = '', suffix = ''): any {
    value = +value; // cast en entier
    return prefix + ( value * value ) + suffix;
  }

}
