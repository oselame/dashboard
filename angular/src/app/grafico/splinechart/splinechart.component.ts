import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-splinechart',
  template: `<chart [options]="options" class="app-splinechart"></chart>`,
  styleUrls: ['./splinechart.component.css']
})
export class SplinechartComponent implements OnInit {

  @Input() title;
  @Input() series;

  options: Object;

  constructor() {}

  ngOnInit() {
    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
          text: 'Plano Operativo Anual - POA'
      },
      subtitle: {
          text: 'Previsto X Realizado'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: 'US$'
          },
          labels: {
              formatter: function () {
                  return this.value + ' $';
              }
          }
      },
      tooltip: {
          crosshairs: true,
          shared: true
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: 'Previsto',
          marker: {
              symbol: 'square'
          },
          data: [7000.0, 6000.9, 9000.5, 14000.5, 18000.2, 21000.5, 15000.2, 26000.5, 23000.3, 18000.3, 13000.9, 9000.6]

      }, {
          name: 'Realizado',
          marker: {
              symbol: 'diamond'
          },
          data: [9000, 4000.2, 5000.7, 8000.5, 11000.9, 15000.2, 17000.0, 16000.6, 14000.2, 10000.3, 6000.6, 4000.8]
      }]

    };
  }

}
