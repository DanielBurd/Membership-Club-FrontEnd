import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'months'
})
export class MonthsPipe implements PipeTransform {

  transform(value: number): string {
    switch(value){
        case 1:return 'ינואר';
        case 2:return 'פברואר';
        case 3:return 'מרץ';
        case 4:return 'אפריל';
        case 5:return 'מאי';
        case 6:return 'יוני';
        case 7:return 'יולי';
        case 8:return 'אוגוסט';
        case 9:return 'ספטמבר';
        case 10:return 'אוקטובר';
        case 11:return 'נובומבר';
        case 12:return 'דצמבר';
    }
  }

}
