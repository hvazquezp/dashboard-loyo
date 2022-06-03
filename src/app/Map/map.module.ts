import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [
    ViewerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [ViewerComponent]
})
export class MapModule { }
