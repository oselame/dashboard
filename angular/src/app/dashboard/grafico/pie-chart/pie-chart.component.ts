import { Component, OnInit } from '@angular/core';
import { GraficoService } from './../grafico.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: any;
  dataChart: any = [];

  constructor(public graficoService: GraficoService) { }

  ngOnInit() {
    this.loadChart();
    this.loadDataChart();
  }

  loadChart() {
    this.pieChartOptions = {
       chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: null,
            enabled: false
        },/*
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },*/
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
            colorByPoint: true,
            data: [{
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    //--
    }
  }

  loadDataChart() {
    this.graficoService.findTotalPagamentoPendentesPorOrigem()
        .subscribe(data => {
            this.dataChart.forEach(element => {
                this.dataChart.push({ name: element.sgOrigem, y: element.vlReembolso });
            });
        });
  }

}
