import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[addItemOnEnter]'
})
export class AddItemOnEnterDirective {
 //---ДИРЕКТИВА НЕ ДОРАБОТАНА И НЕ ИСПОЛЬЗУЕТСЯ---
  constructor() { }

  @Input('addItemOnEnter') localStorageName:string;

  @HostListener('keyup.enter', ['$event'])
  enterPressed(event){
    this.addItemToCache(event.target.value);
  }

  private addItemToCache(item: string) {
    const names = this.readCache();
    names.push(item);
    this.saveCache(names);
  }

  private saveCache(names:Array<String>) {
    localStorage.setItem(this.localStorageName, JSON.stringify(names));
    console.log('cached: ', names);
  }

  private readCache():Array<String> {
    const cachedNames = JSON.parse(localStorage.getItem(this.localStorageName));
    if (cachedNames != undefined) {
      return cachedNames;
    } 
    return [];
  }
}
