import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VideoGridComponent } from './video-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    VideoGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [VideoGridComponent]
})
export class AppModule { }
