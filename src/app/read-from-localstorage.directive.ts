import { SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[readFromLocalStorage]',
  exportAs: 'readOptions'
})
export class ReadFromLocalstorageDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input('readFromLocalStorage') localStorageName:string;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck');
    const list = this.readCache(this.localStorageName);

    this.viewContainerRef.clear();
    for (const savedItem in list) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  private readCache(localStorageName: string): Array<String> {
    const cachedNames = JSON.parse(localStorage.getItem(localStorageName));
    if (cachedNames != undefined) {
      return cachedNames;
    }
    return [];
  }
}
