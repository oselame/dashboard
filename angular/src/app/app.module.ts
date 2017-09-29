import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MensagensComponent } from './mensagens/mensagens.component';

import { MensagemService } from './mensagens/mensagem.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MensagemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
