import { NgModule } from '@angular/core';

import { MaterialModule } from './../material-design/material.module';
import { GraficoModule } from './../grafico/grafico.module';

import { DashboardComponent } from './dashboard.component';
import { AcompanhamentoTabComponent } from './acompanhamento-tab/acompanhamento-tab.component';
import { MensagensTabComponent } from './mensagens-tab/mensagens-tab.component';


@NgModule({
    declarations: [
        DashboardComponent,
        AcompanhamentoTabComponent,
        MensagensTabComponent
    ],
    imports: [
        MaterialModule,
        GraficoModule
    ],
    exports: [
        DashboardComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }
