import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GridModule, ExcelModule, PDFModule } from "@progress/kendo-angular-grid";
import { GridDataResult } from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";
import { SVGIcon, fileExcelIcon } from "@progress/kendo-svg-icons";
import { ODataService } from "./data.service";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    GridModule,
    ExcelModule,
    PDFModule,
    AsyncPipe
  ],
    // providers: [ODataService],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  public fileExcelIcon: SVGIcon = fileExcelIcon;
  public gridData!: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 6,
    filter: {
      logic: "and",
      filters: [],
    },
    group: [],
    sort: [
      {
        field: "ProductName",
        dir: undefined,
      },
    ],
  };

  constructor(public odataService: ODataService) { }

  public ngOnInit(): void {
    this.gridData = this.odataService.pipe(
      map((data) => process(data, this.state))
    );

    this.odataService.read();
  }

  public onStateChange(state: State): void {
    this.state = state;
    this.odataService.read();
  }
}
