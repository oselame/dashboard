import { NgModule } from '@angular/core';

import { GoogleChartDirective } from './google-chart/google-chart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';

@NgModule({
  imports: [
  ],
  exports: [
    PiechartComponent,
    ColumnchartComponent
  ],
  declarations: [
    GoogleChartDirective,
    PiechartComponent,
    ColumnchartComponent
  ]
})
export class GraficoModule { }
