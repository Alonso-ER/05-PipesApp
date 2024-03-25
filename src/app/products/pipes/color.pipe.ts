import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(color: Color): string {
    switch(color){
      case Color.red:
        return 'Rojo';
      case Color.blue:
        return 'Azul';
      case Color.green:
        return 'Verde';
      case Color.black:
        return 'Negro';
    }
  }

}
