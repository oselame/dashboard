import { NgModule } from '@angular/core';

import { GoogleChartDirective } from './google-chart/google-chart.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
  ],
  exports: [
    SimpleComponent
  ],
  declarations: [
    GoogleChartDirective,
    SimpleComponent
  ]
})
export class GraficoModule { }
