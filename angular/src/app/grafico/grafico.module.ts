import { NgModule } from '@angular/core';

import { MaterialModule } from './../material-design/material.module';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';

import { GraficoService } from './grafico.service';

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
        BasicLineChartComponent,
        PieChartComponent,
        GaugeChartComponent
    ],
    imports: [
        ChartModule,
        MaterialModule
    ],
    exports: [
        BasicLineChartComponent,
        PieChartComponent,
        GaugeChartComponent
    ],
    providers: [
        {provide: HighchartsStatic, useFactory: highchartsFactory},
        GraficoService
    ]
})
export class GraficoModule { }
