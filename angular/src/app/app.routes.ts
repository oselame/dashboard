import { Routes } from '@angular/router';

import { MensagensComponent } from './mensagens/mensagens.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const ROUTES: Routes = [
    {path: 'dashboard/:cdProjetp', component: DashboardComponent},
    {path: 'mensagens/:cdProjetp', component: MensagensComponent}
];
