import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MensagemService } from './mensagem.service';

import { Mensagem } from './mensagem.model';

@Component({
  selector: 'ds-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  cdProjeto: number;
  mensagens: Mensagem[] = [];

  constructor(private mensagemService: MensagemService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.cdProjeto = this.route.parent.snapshot.params['cdProjeto'];
    this.mensagemService.getMensagensSistema(this.cdProjeto)
      .subscribe(mensagens => this.mensagens = mensagens);
  }

}
