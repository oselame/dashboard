import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Highcharts } from 'highcharts-more-node';

import { GraficoService } from './../grafico.service';

@Component({
  selector: 'ds-avancodesembolso',
  templateUrl: './avancodesembolso.component.html',
  styleUrls: ['./avancodesembolso.component.css']
})
export class AvancodesembolsoComponent implements OnInit {
  cdProjeto: number = 0;
  chart: Highcharts;

  constructor(
    private route: ActivatedRoute,
    private graficoService: GraficoService
  ) {}

  ngOnInit() {
    this.cdProjeto = this.route.parent.snapshot.params['cdProjeto'];
    
    this.graficoService.getPercentualAvancoDesembolsoPorProjeto(this.cdProjeto)
      .subscribe(vlPercentual => this.criarGrafico(vlPercentual));
  }

  criarGrafico(vlPercentual) {
    this.chart = Highcharts.chart(
      'avancoDesembolsoChart',
      {
        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },

        title: {
          text: 'Percentual de Desembolso'
        },

        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [[0, '#FFF'], [1, '#333']]
              },
              borderWidth: 0,
              outerRadius: '109%'
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [[0, '#333'], [1, '#FFF']]
              },
              borderWidth: 1,
              outerRadius: '107%'
            },
            {
              // default background
            },
            {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }
          ]
        },

        // the value axis
        yAxis: {
          min: 0,
          max: 100,

          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
            step: 2,
            rotation: 'auto'
          },
          title: {
            text: '%'
          },
          plotBands: [
            {
              from: 0,
              to: 80,
              color: '#55BF3B' // green
            },
            {
              from: 81,
              to: 90,
              color: '#DDDF0D' // yellow
            },
            {
              from: 91,
              to: 100,
              color: '#DF5353' // red
            }
          ]
        },
        credits: {
          enabled: false
        },

        series: [
          {
            name: 'Speed',
            data: [ vlPercentual ],
            tooltip: {
              valueSuffix: ' %'
            }
          }
        ]
      }
    );
  }
}
