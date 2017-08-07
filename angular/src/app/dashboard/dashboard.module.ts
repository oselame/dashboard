import { NgModule } from '@angular/core';

import { Ng2HighchartsModule } from 'ng2-highcharts';

import { GraficoService } from './grafico/grafico.service';

import { ColumnChartComponent } from './grafico/column-chart/column-chart.component';
import { BasicLineChartComponent } from './grafico/basic-line-chart/basic-line-chart.component';
import { GaugeChartComponent } from './grafico/gauge-chart/gauge-chart.component';
import { SolidgaugeComponent } from './grafico/solidgauge/solidgauge.component';

@NgModule({
    declarations: [
        ColumnChartComponent,
        BasicLineChartComponent,
        GaugeChartComponent,
        SolidgaugeComponent
    ],
    imports: [
        Ng2HighchartsModule,
    ],
    exports: [
        ColumnChartComponent,
        BasicLineChartComponent,
        GaugeChartComponent,
        SolidgaugeComponent
    ],
    providers: [
        GraficoService
    ]
})
export class DashboardModule { }
