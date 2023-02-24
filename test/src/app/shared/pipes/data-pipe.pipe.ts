import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipePipe implements PipeTransform {

  transform(array: any[], query: string, column?: any, column1?: any, column2?: any): any {
    if (query) {
      query = query.toLowerCase();
      return array.filter((value: any) =>
        value[column].toLowerCase().indexOf(query) > -1 || value[column1].toLowerCase().indexOf(query) > -1 || value[column2].toLowerCase().indexOf(query) > -1);
    }
    return array;
  }

}
