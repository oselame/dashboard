import { Component, OnInit } from '@angular/core';

import { GoogleChartDirective } from './../google-chart/google-chart.component';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  public pie_ChartData = [
    ['Origem', 'Valor Financiado'],
    ['BID',     1000],
    ['CNTP',    800],
  ];
  public pie_ChartOptions  = {
    title: 'My Daily Activities',
    width: 500,
    height: 300
  };


  constructor() {}

  ngOnInit() {

  }


}
