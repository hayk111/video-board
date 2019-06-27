import {Component, ViewChild, ViewContainerRef, OnInit} from "@angular/core";

import { IStatusPanelParams } from "ag-grid-community";
import {IFilterAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-toggle-row-select',
  templateUrl: './toggle-row-select.component.html',
  styleUrls: ['./toggle-row-select.component.scss']
})
export class ToggleRowSelectComponent {

  private params: IStatusPanelParams;

  agInit(params: IStatusPanelParams): void {
    this.params = params;
  }

  ngOnInit() {
    console.log("TCL: ToggleRowSelectComponent -> ngOnInit -> this", this)
    console.log("TCL: ToggleRowSelectComponent -> ngOnInit -> this.params", this.params)
  }

  onClick() : void {
    console.log("TCL: ToggleRowSelectComponent -> this", this)
    alert('Selected Row Count: ' + this.params.api.getSelectedRows())
  }
}
