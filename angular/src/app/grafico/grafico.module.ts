import { NgModule } from '@angular/core';

import { NvD3Component } from 'ng2-nvd3'

import { SimpleComponent } from './simple/simple.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [NvD3Component, SimpleComponent, LinechartComponent, PiechartComponent],
  imports: [LinechartComponent, PiechartComponent, SimpleComponent],
  exports: [LinechartComponent, PiechartComponent, SimpleComponent],
})
export class GraficoModule { }
