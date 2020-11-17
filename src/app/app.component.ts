import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homework-sr3-task7';
  options = [];

  ngOnInit(): void {
    this.readCahce();
    console.log('cached: ', this.options);
  }

  addItemToCache(val: any) {
    this.options.push(val.target.value);
    this.saveCache();
  }

  private saveCache() {
    localStorage.setItem('names', JSON.stringify(this.options));
    console.log('cached: ', this.options);
  }

  private readCahce() {
    const cachedNames = JSON.parse(localStorage.getItem('names'));
    if (cachedNames != undefined) {
      this.options = cachedNames;
    } 
  }

  resetCache() {
    this.options = [];
    this.saveCache();
  }
}
