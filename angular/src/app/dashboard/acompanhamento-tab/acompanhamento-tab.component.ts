import { Component, OnInit } from '@angular/core';

import { GraficoService } from './../../grafico/grafico.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-acompanhamento-tab',
  templateUrl: './acompanhamento-tab.component.html',
  styleUrls: ['./acompanhamento-tab.component.css']
})
export class AcompanhamentoTabComponent implements OnInit {

  vlPercentual = 0;
  cdProjeto = 39;
  lineChartValues = [{
    name: 'Line 1',
    data: [10, 5, 28, 6]
  }, {
    name: 'Line 2',
    data: [5, 20, 10, 30]
  }, {
    name: 'Line 3',
    data: [15, 25, 2, 80]
  }];

  pieChartSeries = {
    name: 'Brands',
    data: [
      { name: 'Adriano', y: 10, color: '#00aabb' },
      { name: 'Lidiane', y: 10, color: '#00bbaa' },
      { name: 'Adriana', y: 40, color: '#bbaa00' },
      { name: 'Gustavo', y: 40, color: '#bbaa00' }
    ]
  };

  solidChartSeries = [
    {
      name: 'title',
      data: [70],
      dataLabels: {
          format: `<div style="text-align:center">
                      <span style="font-size:25px;color: black">{y}</span><br/>
                      <span style="font-size:12px;color:silver">%</span>
                   </div>`
      },
      tooltip: {
          valueSuffix: ' %'
      }
    }
  ];

  constructor(private graficoService: GraficoService) { }

  ngOnInit() {
    this.loadCharts(this.cdProjeto);
  }

  loadCharts(cdProjeto) {
    /*
    this.graficoService.findPercentualAvancoDesembolsoPorProjetoX(cdProjeto).
      subscribe(
        vlPercental => {
          this.vlPercentual = Math.trunc(Number(vlPercental));
          console.log(this.vlPercentual);
        },
        error => {
          console.log(error);
        }
      );
      */
  }



}
