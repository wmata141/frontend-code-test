import { Pipe, PipeTransform } from '@angular/core';
import { Cats } from '../../interfaces/cats';

@Pipe({
  name: 'cats',
  pure: false
})

export class CatsPipe implements PipeTransform {

  transform(cats: Cats[], filter: Cats): any {
    if (!cats || !filter) {
      return cats;
    }

    cats = [...cats.filter(item => item.origin.toUpperCase().indexOf(filter.origin.toUpperCase()) !== -1)];
    cats = [...cats.filter(item => item.name.toUpperCase().indexOf(filter.name.toUpperCase()) !== -1)];

    return cats;
  }
}
