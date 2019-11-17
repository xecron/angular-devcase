import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spread'
})
export class SpreadPipe implements PipeTransform {

  transform(values: any, args: { key: string }): any {
    const key = args.key;
    const newValues = [];

    values.map(value => {
      newValues.push(...value[key]);
    });

    // filter duplicate items after spread operation
    return newValues.filter((elem, index, self) => index === self.indexOf(elem));
  }
}
