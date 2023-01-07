import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApplicationListService } from './application-list.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
})
export class ApplicationListComponent implements OnInit {
  rawDataList: Array<any> = [];
  constructor(private service: ApplicationListService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getRawData().subscribe((res: any) => {
      const key = 'ResourceGroup';
      const arrayUniqueByKey = [
        ...new Map(res.map((item: any) => [item[key], item])).values(),
      ]; // identify the unique recods from raw data
      this.rawDataList = arrayUniqueByKey.sort(
        (a: any, b: any) => b.ConsumedQuantity - a.ConsumedQuantity
      ); // sort the raw data based on  ConsumedQuantity to identify the mosted used service group
    });
  }
}
