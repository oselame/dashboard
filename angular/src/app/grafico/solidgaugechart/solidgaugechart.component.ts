import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solidgaugechart',
  template: `<chart [options]="options" class="app-solidgaugechart"></chart>`,
  styleUrls: ['./solidgaugechart.component.css']
})
export class SolidgaugechartComponent implements OnInit {
  @Input() title;
  @Input() series;

  options: Object;

  constructor() {}

  ngOnInit() {
    this.options = {
        chart: {
            type: 'solidgauge',
        },
        title: {
            text: this.title
        },
        subtitle: {
            text: 'subtitle'
        },
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        // the value axis
        yAxis: {
            min: 0,
            max: 100,
            /*
            minColor: '#DF5353',
            maxColor: '#55BF3B',*/
            /*
            stops: [
                [0.8, '#DF5353'],  // red
                [0.95, '#DDDF0D'], // yellow
                [1, '#55BF3B'] // green
            ],*/
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            },
            plotBands: [{
                from: 0,
                to: 80,
                color: '#DDDF0D', // yellow
            }, {
                from: 81,
                to: 95,
                color: '#55BF3B' // green
            }, {
                from: 96,
                to: 100,
                color: '#DF5353' // red
            }]
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        series: this.series
    };
  }

}
