import { Teste2Component } from './teste2/teste2.component';
import { TesteComponent } from './teste/teste.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './dashboard/graficos/graficos.component';
import { MensagensComponent } from './dashboard/mensagens/mensagens.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MensagemListComponent } from './dashboard/mensagens/mensagem-list/mensagem-list.component';


export const ROUTES: Routes = [
    {path: '', component: TesteComponent},
    {path: 'teste2', component: Teste2Component},
    {path: 'dashboard/:cdProjeto', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'graficos', pathMatch: 'full'},
            { path: 'graficos', component: GraficosComponent},
            { path: 'mensagens', component: MensagensComponent},
            { path: 'mensagens-list/:cdMensagem', component: MensagemListComponent}
        ]
    },
    {path: '**', component: NotfoundComponent}
];
