import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-xychart',
  template: `<chart [options]="options" class="app-xychart"></chart>`,
  styleUrls: ['./xychart.component.css']
})
export class XychartComponent implements OnInit {

  @Input() title;
  @Input() series;

  options: Object;

  constructor() {}

  ngOnInit() {
    this.options = {
      chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Plano Operativo Anual - POA'
    },
    subtitle: {
        text: 'Previsto X Realizado'
    },
    xAxis: [{
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
            'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} $',
            style: {
                color: 'red'
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: 'blue'
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Rainfall',
            style: {
                color: 'red'
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: 'blue'
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: '#FFFFFF'
    },
    series: [{
        name: 'Previsto',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Realizado',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
          valueSuffix: '°C'
      }
  }]

    };
  }

}
