import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { MensagensComponent } from './dashboard/mensagens/mensagens.component';
import { GraficosComponent } from './dashboard/graficos/graficos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { MensagemService } from './dashboard/mensagens/mensagem.service';
import { GraficoService } from './dashboard/graficos/grafico.service';

import { MensagemListComponent } from './dashboard/mensagens/mensagem-list/mensagem-list.component';
import { MensagemComponent } from './dashboard/mensagens/mensagem/mensagem.component';
import { AvancodesembolsoComponent } from './dashboard/graficos/avancodesembolso/avancodesembolso.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GraficosComponent,
    MensagensComponent,
    NotfoundComponent,
    MensagemListComponent,
    MensagemComponent,
    AvancodesembolsoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MensagemService,
    GraficoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
