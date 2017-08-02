import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-piechart",
  templateUrl: "./piechart.component.html",
  styleUrls: ["./piechart.component.css"]
})
export class PiechartComponent implements OnInit {
  d3: any;
  nv: any;

  options: any;
  data: any;

  constructor() {}

  ngOnInit() {
    this.configChart();
    this.loadData();
  }

  configChart() {
    this.options = {
      chart: {
        type: "pieChart",
        height: 500,
        x: function(d) {
          return d.key;
        },
        y: function(d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
  }

  loadData() {
    this.data = [
      {
        key: "One",
        y: 5
      },
      {
        key: "Two",
        y: 2
      },
      {
        key: "Three",
        y: 9
      },
      {
        key: "Four",
        y: 7
      },
      {
        key: "Five",
        y: 4
      },
      {
        key: "Six",
        y: 3
      },
      {
        key: "Seven",
        y: 0.5
      }
    ];
  }
}
