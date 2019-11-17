import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spread'
})
export class SpreadPipe implements PipeTransform {

  transform(values: any, args: { key: string }): any {
    const key = args.key;
    const colors = [];

    values.map(value => {
      colors.push(...value[key]);
    });

    // filter duplicate colors
    return colors.filter((elem, index, self) => index === self.indexOf(elem));
  }
}
