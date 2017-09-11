import { Component, OnInit } from '@angular/core';
import { GraficoService } from './../grafico.service';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {

  public gaugeChartOptions: any;
  dataChart: any = [];

  ngOnInit() {
    this.loadChart();
    this.loadDataChart();
  }

  loadChart() {
    this.gaugeChartOptions = {
      chart: {
          type: 'solidgauge',
          spacing: [15, 15, 15, 15]
      },

      title: {
        text: 'Percentual Desembolsado'
      },
      subtitle: {
        text: ''
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

      // the value axis
      yAxis: {
          stops: [
              [0.8, '#DDDF0D'], // red
              [0.95, '#55BF3B'], // yellow
              [0.96, '#DF5353'] // green
          ],
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
        data: [97],
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
    let perc = 96;
    this.gaugeChartOptions.series[0].data[0] = perc;
    if (perc <= 80) {
      this.gaugeChartOptions.subtitle.text = '';
    } else if (perc <= 95) {
      this.gaugeChartOptions.subtitle.text = 'Atenção, Realize um novo desembolso';
    }  else {
      this.gaugeChartOptions.subtitle.text = 'Saldo quase acabando, realize um novo desembolso';
    }
  }

}
