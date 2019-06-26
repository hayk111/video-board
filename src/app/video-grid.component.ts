import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  title = 'video-board';
  private isFullWidthCell;
  private fullWidthCellRenderer;
  rowData: any;

  columnDefs = [
    {
      cellRenderer: ({value}) => {
        const {url, height, width} = value;
        return `<img src="${url}" width="${width}" height="${height}">`;
      }, headerName: '', field: 'thumbnails', sortable: true, filter: true, checkboxSelection: true, width: 300},
    {headerName: 'Published on', field: 'publishedAt', sortable: true, filter: true, editable: true, width: 300 },
    {headerName: 'Video Title', field: 'title', sortable: true, filter: true, editable: true, width: 300 },
    {headerName: 'Description', field: 'description', sortable: true, filter: true, editable: true, width: 300 },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.rowData = this.http.get(environment.dataUrl)
      .pipe(
        map((res: any) => res.items),
        map((items) => {
          console.log('res', items);
          return items.map(item => ({
            thumbnails: item.snippet.thumbnails.default,
            title: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
          }));
        })
      );
    console.log("TCL: VideoGridComponent -> ngOnInit -> this.rowData", this.rowData)
  }

/*   getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log("TCL: VideoGridComponent -> getSelectedRows -> selectedNodes", selectedNodes)
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  } */

}
