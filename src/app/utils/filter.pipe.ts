import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, args: any): any {
    const key = Object.keys(args)[0];
    const keyValue = args[key];

    // if the filter property is not undefined or null
    if (!keyValue) {
      return values;
    }

    // filter out the values depend on filter property
    return values.filter((value) =>  {
      const selectedProp = value[key];
      return Array.isArray(selectedProp) ? selectedProp.some(color => color === keyValue) :
        selectedProp === keyValue;
    });
  }

}
