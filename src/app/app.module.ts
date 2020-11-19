import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddItemOnEnterDirective } from './add-item-on-enter.directive';
import { ReadFromLocalstorageDirective as ReadFromLocalStorageDirective } from './read-from-localstorage.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddItemOnEnterDirective,
    ReadFromLocalStorageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
