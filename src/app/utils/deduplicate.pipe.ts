import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deduplicate'
})
export class DeduplicatePipe implements PipeTransform {
  transform(values: any, args: { key: string }): any {
    const key = args.key;
    const uniqueArray = [];

    values.forEach(oldValue => {
      if (!uniqueArray.some(value => value[key] === oldValue[key])) {
        uniqueArray.push(oldValue);
      }
    });

    return uniqueArray;
  }
}
