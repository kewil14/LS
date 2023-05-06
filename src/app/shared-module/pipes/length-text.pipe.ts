import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tail'
})
export class LengthTextPipe implements PipeTransform {

  transform(text: string, tail: number): string {
    if(text.length > tail) {
      text = text.substring(text.length - tail, text.length -1)
    }
    return text;
  }

}
