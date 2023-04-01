import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fighterTypeColor'
})
export class FighterTypeColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Westling':
        color = 'red lighten-1';
        break;
      case 'Karate':
        color = 'blue lighten-1';
        break;
      case 'Boxing':
        color = 'green lighten-1';
        break;
      case 'MMA':
        color = 'brown lighten-1';
        break;
      case 'Kickboxing':
        color = 'grey lighten-3';
        break;
      case 'Sambo':
        color = 'blue lighten-3';
        break;
      case 'BJJ':
        color = 'purple lighten-3';
        break;
      case 'Muay-Thai':
        color = 'orange lighten-3';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
