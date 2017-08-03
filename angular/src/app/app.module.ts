import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { GraficoModule } from './grafico/grafico.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    GraficoModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
