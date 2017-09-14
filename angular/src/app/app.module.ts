import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-design/material.module';

import { AppConfigModule } from './app-config.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';

import { DesembolsoService } from './services/desembolso/desembolso.service';

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
  ],
  providers: [DesembolsoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
