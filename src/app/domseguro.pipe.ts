import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(value: unknown, url: string): unknown {
    console.log('Entre al pipe');
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url+value);
  }
}
