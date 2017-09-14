import { Component, OnInit } from '@angular/core';
import { GraficoService } from './../grafico.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {

  options: any;
  chart: any;

  constructor(public graficoService: GraficoService) { }

  ngOnInit() {
    this.loadChart();
    this.loadDataChart();
  }

  loadChart() {
    this.options = {
      chart: {
          type: 'solidgauge',
          spacing: [15, 15, 15, 15]
      },
      credits: {
        enabled: false
      },

      title: {
        text: 'Percentual Desembolsado'
      },
      subtitle: {
        text: ''
      },

      pane: {
          center: ['50%', '85%'],
          size: '150%',
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

      // the value axis
      yAxis: {
        minColor: "#DDDF0D",
        maxColor: "#DF5353",
        /*
          stops: [
              [0.5, '#DDDF0D'], // red
              [0.85, '#55BF3B'], // yellow
              [1, '#DF5353'] // green
          ],*/
          lineWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
              y: -70,
              text: 'Percentual'
          },
          labels: {
              y: 16
          },
          min: 0,
          max: 100,
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

      series: [{
        name: 'Percentual',
        data: [0],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                'black' + '">{y}</span><br/>' +
                   '<span style="font-size:12px;color:silver">%</span></div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]
    }
  }

  loadDataChart() {
    this.graficoService.findPercentualAvancoDesembolsoPorProjeto().subscribe(
      vlPercental => {
        if (vlPercental < 80) {
          this.options.subtitle.text = '';
        } else if (vlPercental < 95) {
          this.options.subtitle.text = 'Atenção providenciar novo desembolso';
        } else {
          this.options.subtitle.text = 'Urgente providenciar novo desembolso';
        }
        this.options.series[0].data[0] = vlPercental;
      }
    );

    
  }

}
