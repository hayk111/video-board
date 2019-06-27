import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { ToggleRowSelectComponent } from './toggle-row-select/toggle-row-select.component';

import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  title = 'video-board';

  private gridApi;
  private gridColumnApi;

  private sideBar;
  private statusBar;
  private frameworkComponents;
  private rowData: any;

  private checkAllVisible = false;
  private checkAllBtnName = 'Append select boxes';

  columnDefs = [
    {
      hide: !this.checkAllVisible,
      headerName: '',
      headerComponentFramework: ToggleRowSelectComponent,
      width: 40,
      editable: true,
      checkboxSelection: true,
      field: 'check',
    },
    {
      cellRenderer: ({value}) => {
        const {url, height, width} = value;
        return `<img src='${url}' width='${width}' height='${height}'>`;
      },
      headerName: '',
      field: 'thumbnails',
      sortable: true,
      filter: true,
      width: 125,
      enableRowGroup: true,
      enablePivot: true
    },
    {
      cellRenderer: ({value}) => {
        return `<time>${moment(value).format('YYYY-MM-DD, h:mm:ss a')}</time>`;
      },
      headerName: 'Published on',
      field: 'publishedAt',
      sortable: true,
      editable: true,
      filter: true,
      width: 300
    },
    {
      headerName: 'Video Title',
      field: 'title',
      sortable: true,
      filter: true,
      editable: true,
      width: 300
    },
    {
      headerName: 'Description',
      field: 'description',
      sortable: true,
      filter: true,
      editable: true,
      width: 300
    },
  ];

  defaultColDef = {
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true,
    sortable: true,
    filter: true
  };

  constructor(private http: HttpClient) {
    this.sideBar = 'sidebar';

    this.statusBar = {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent' },
        { statusPanel: 'agSelectedRowCountComponent' },
      ]
    };
  }

  ngOnInit() {
    this.rowData = this.http.get(environment.dataUrl)
      .pipe(
        map((res: any) => res.items),
        map((items) => {
          return items.map(item => ({
            thumbnails: item.snippet.thumbnails.default,
            title: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
          }));
        })
      );
  }

  getContextMenuItems(params) {
    const contextMenu: any[] = ['copy', 'copyWithHeaders', 'paste', 'separator', 'export'];

    if (params.column.colId === 'title') {
      contextMenu.unshift({
          name: 'New tab ' + params.value,
          action() {
            window.open(params.value, '_blank');
          },
          icon: `<img class='new-tab-icon' src='/assets/icons/open-view-in-new-tab.png' />`
      });
    }

    return contextMenu;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  toggleCheckUncheckAll() {
    this.checkAllVisible = !this.checkAllVisible;
    this.gridColumnApi.setColumnVisible('check', this.checkAllVisible);

    if (!this.checkAllVisible) {
      this.checkAllBtnName = 'Append select boxes';
    } else {
      this.checkAllBtnName = 'Remove select boxes';
    }
  }
}
