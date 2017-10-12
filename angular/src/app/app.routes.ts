import { Teste2Component } from './teste2/teste2.component';
import { TesteComponent } from './teste/teste.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './dashboard/graficos/graficos.component';
import { MensagensComponent } from './dashboard/mensagens/mensagens.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MensagemListComponent } from './dashboard/mensagens/mensagem-list/mensagem-list.component';
import { PoaComponent } from './dashboard/poa/poa.component';
import { DesembolsoComponent } from './dashboard/desembolso/desembolso.component';

export const ROUTES: Routes = [
    {path: '', component: NotfoundComponent},
    {path: 'dashboard/:cdProjeto', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'poa', pathMatch: 'full'},
            { path: 'poa', component: PoaComponent},
            { path: 'desembolso', component: DesembolsoComponent},
            { path: 'mensagens', component: MensagensComponent},
            { path: 'mensagens-list/:cdMensagem', component: MensagemListComponent}
        ]
    },
    {path: '**', component: NotfoundComponent}
];
