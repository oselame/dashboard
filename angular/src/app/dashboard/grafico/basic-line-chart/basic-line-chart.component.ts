import { Component, OnInit } from '@angular/core';

import * as highcharts from 'highcharts';

@Component({
  selector: 'app-basic-line-chart',
  templateUrl: './basic-line-chart.component.html',
  styleUrls: ['./basic-line-chart.component.css']
})
export class BasicLineChartComponent implements OnInit {

  options: any;

  constructor() {
    this.options = {
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },

      subtitle: {
          text: 'Source: thesolarfoundation.com'
      },

      yAxis: {
          title: {
              text: 'Number of Employees'
          }
      },

      legend: {
          layout: 'horizontal',
          align: 'right',
          verticalAlign: 'bottom'
      },

      plotOptions: {
          series: {
              pointStart: 2010
          }
      },

      loading: {
        hideDuration: 100,
        labelStyle: { 'fontWeight': 'bold', 'position': 'relative', 'top': '45%' },
        showDuration: 100,
        style: { 'position': 'absolute', 'backgroundColor': '#ffffff', 'opacity': 0.5, 'textAlign': 'center' }
      },
      
      credits: {
        enabled: false
      },

      series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }]
    };
  }

  ngOnInit() {
    this.options.series = [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }];
  }

}
