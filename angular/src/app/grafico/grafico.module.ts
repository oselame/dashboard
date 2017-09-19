import { NgModule } from '@angular/core';

import { MaterialModule } from './../material-design/material.module';
import { ChartModule } from 'angular2-highcharts';

import { GraficoService } from './grafico.service';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { SolidgaugechartComponent } from './solidgaugechart/solidgaugechart.component';

import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { XychartComponent } from './xychart/xychart.component';
import { SplinechartComponent } from './splinechart/splinechart.component';
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
        LinechartComponent,
        PiechartComponent,
        SolidgaugechartComponent,
        XychartComponent,
        SplinechartComponent
    ],
    imports: [
        ChartModule,
        MaterialModule
    ],
    exports: [
        LinechartComponent,
        PiechartComponent,
        SolidgaugechartComponent,
        XychartComponent,
        SplinechartComponent
    ],
    providers: [
        {provide: HighchartsStatic, useFactory: highchartsFactory},
        GraficoService
    ]
})
export class GraficoModule { }
