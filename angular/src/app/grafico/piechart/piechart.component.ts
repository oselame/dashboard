import { Component, OnInit } from '@angular/core';

import { GoogleChartDirective } from './../google-chart/google-chart.component';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  public pieChartData = [
    ['Origem', 'Valor Financiado'],
    ['BID',     1000],
    ['CNTP',    800],
  ];

  public pieChartOptions  = {
    title: 'Valor Financiado',
    backgroundColor: 'whitesmoke',
    chartArea: { left: 20, top: 0, width: '100%', height: '100%'}
  };


  constructor() {}

  ngOnInit() {

  }


}
