import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponentComponent } from './config/not-found-component/not-found-component.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', component: NotFoundComponentComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot( appRoutes );
