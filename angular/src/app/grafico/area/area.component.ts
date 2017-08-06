import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  @ViewChild('areachart') input: ElementRef;

  // @Input() 
  options: Object;

  constructor() {
   }

  ngOnInit() {
    this.createChartArea();
  }

  createChartArea() {
    this.options = {
        title : { text : 'simple chart' },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2],
        }]
    };
  }

}

