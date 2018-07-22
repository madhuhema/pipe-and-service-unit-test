import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWeather'
})
export class NumberToWeatherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
         value = 'Snowy';
         break;
      case 1:
         value = 'Sunny';
         break;
      default:
         value = value;
    }
    return value;
  }

}
