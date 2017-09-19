import { Component, Input, OnInit } from '@angular/core';

// import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-linechart',
  template: `<chart [options]="options" class="app-linechart"></chart>`,
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  @Input() title;
  @Input() series;

  options: Object;

  constructor() {}

  ngOnInit() {
    this.options = {
      title : {
        text: this.title
      },
      yAxis: {
        title: {
            text: 'Number of Employees'
        }
      },
      credits: {
        enabled: false
      },
      series: this.series
  };
  }

}
