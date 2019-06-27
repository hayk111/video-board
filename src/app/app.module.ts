import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VideoGridComponent } from './video-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import 'ag-grid-enterprise';
import { ToggleRowSelectComponent } from './toggle-row-select/toggle-row-select.component';

@NgModule({
  declarations: [
    VideoGridComponent,
    ToggleRowSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [VideoGridComponent, ToggleRowSelectComponent]
})
export class AppModule { }
