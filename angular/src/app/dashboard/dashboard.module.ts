import { NgModule } from '@angular/core';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { GraficoService } from './grafico/grafico.service';
import { DashboardComponent } from './dashboard.component';
import { BasicLineChartComponent } from './grafico/basic-line-chart/basic-line-chart.component';
import { PieChartComponent } from './grafico/pie-chart/pie-chart.component';

export function highchartsFactory() {
    const hc = require('highcharts');
    const hcm = require('highcharts/highcharts-more');
    // const exp = require('highcharts/modules/exporting');
    const sg = require('highcharts/modules/solid-gauge');
    hcm(hc);
    // exp(hc);
    sg(hc);
    return hc;
}


@NgModule({
    declarations: [
        DashboardComponent,
        BasicLineChartComponent,
        PieChartComponent
    ],
    imports: [
        ChartModule
    ],
    exports: [
        DashboardComponent,
        BasicLineChartComponent,
        PieChartComponent
    ],
    providers: [
        {provide: HighchartsStatic, useFactory: highchartsFactory},
        GraficoService
    ]
})
export class DashboardModule { }
