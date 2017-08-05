import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.css']
})
export class ColumnchartComponent implements OnInit {

  public data = [
    ['Element', 'Density', { role: 'style' }],
    ['Copper', 8.94, '#b87333'],
    ['Silver', 10.49, 'silver'],
    ['Gold', 19.30, 'gold'],
    ['Platinum', 21.45, 'color: #e5e4e2' ]
  ];

  public options  = {
    title: 'Valor Financiado',
    width: '100%',
    height: '100%',
    backgroundColor: 'whitesmoke'
  };

  constructor() { }

  ngOnInit() {
  }

}
