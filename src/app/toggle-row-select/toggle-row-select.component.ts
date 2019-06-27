import {Component, ElementRef} from '@angular/core';
import {IHeaderAngularComp} from 'ag-grid-angular/main';

@Component({
  selector: 'app-toggle-row-select',
  templateUrl: './toggle-row-select.component.html',
  styleUrls: ['./toggle-row-select.component.scss']
})
export class ToggleRowSelectComponent implements IHeaderAngularComp {
  private params: any;

  agInit(params) {
    this.params = params;
  }

  onChange(e) {
    if (e.target.checked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}
