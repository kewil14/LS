import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suspension'
})
export class SuspensionPipe implements PipeTransform {

  transform(text: string, tail: number): string {
    if(text.length > tail) {
      text = text.substring(0, tail) + '...'
    }
    return text;
  }

}
