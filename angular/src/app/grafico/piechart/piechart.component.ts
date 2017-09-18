import { Component, Input, OnInit } from '@angular/core';

// import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-piechart',
  template: `<div>pieChart</div>`,
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  @Input() title;
  @Input() series;

  chart: any;

/*  
  chart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
        text: 'Pie Chat'
    },
    credits: {
      enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        data: [{
            name: 'Title',
            y: 100
        }]
    }]
  });
*/
  constructor() { }

  ngOnInit() {
    /*
    this.chart.options.title.text = this.title;
    this.chart.options.series = [];
    this.chart.options.series.push( this.series );
    */
  }

}
