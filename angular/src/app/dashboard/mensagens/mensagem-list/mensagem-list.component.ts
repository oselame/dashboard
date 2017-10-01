import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MensagemService } from './../mensagem.service';

import { Mensagem } from './../mensagem.model';

@Component({
  selector: 'ds-mensagem-list',
  templateUrl: './mensagem-list.component.html',
  styleUrls: ['./mensagem-list.component.css']
})
export class MensagemListComponent implements OnInit {

  cdProjeto: number;
  cdMensagem: number;
  mensagem: any = {};

  constructor(private route: ActivatedRoute,
              private mensagemService: MensagemService) { }

  ngOnInit() {
    this.cdProjeto = this.route.parent.snapshot.params['cdProjeto'];
    this.cdMensagem = this.route.snapshot.params['cdMensagem'];

    this.mensagemService.getMensagensSistema(this.cdProjeto).subscribe(
      mensagens => {
        this.mensagem = mensagens.filter(mensagem => {
            return Number(mensagem.cdMensagem) === Number(this.cdMensagem);
          }
        )[0];
      }
    );

  }

}
