import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashy'
})
export class DashyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let updatedValue = '';
    for(let i =0;i< value.length;i++){
      updatedValue += value[i];
      if(i + 1 < value.length)
        updatedValue += '-';
    }
    return updatedValue;
  }

}
