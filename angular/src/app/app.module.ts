import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-design/material.module';

import { AppConfigModule } from './app-config.module';
import { ConfigModule } from './config/config.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { GraficoModule } from './grafico/grafico.module';

import { DesembolsoService } from './services/desembolso/desembolso.service';

import { appRouting } from './app.routing';

import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppConfigModule,
    MaterialModule,
    DashboardModule,
    GraficoModule,
    ConfigModule,
    appRouting
  ],
  providers: [
    DesembolsoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
