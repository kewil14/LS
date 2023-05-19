import { revenueBarChart, statData } from './data';
import { ChartType } from './institution.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'health-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  revenueBarChart!: ChartType;
  statData: any;
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Contacts' }, { label: 'Profile', active: true }];

    // fetches the data
    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.revenueBarChart = revenueBarChart;
    this.statData = statData;
  }
}
