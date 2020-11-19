import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homework-sr3-task7';
  options = [];

  resetCache() {
    localStorage.setItem('names', JSON.stringify(new Array<string>()));
  }

  ngDoCheck(): void {
    this.options = this.readCache('names');
    console.log('ngDoCheck ', this.options)
  }

  private readCache(localStorageName: string): Array<String> {
    const cachedNames = JSON.parse(localStorage.getItem(localStorageName));
    if (cachedNames != undefined) {
      return cachedNames;
    }
    return [];
  }
}
