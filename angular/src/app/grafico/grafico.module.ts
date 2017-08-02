import { NgModule } from '@angular/core';

import { NvD3Component } from 'ng2-nvd3'

import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DiscretebarchartComponent } from './discretebarchart/discretebarchart.component';

import 'd3';
import 'nvd3';

@NgModule({
  imports: [],
  exports: [ LinechartComponent, PiechartComponent, DiscretebarchartComponent ],
  declarations: [NvD3Component, LinechartComponent, PiechartComponent, DiscretebarchartComponent]
})
export class GraficoModule { }
