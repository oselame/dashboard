import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MensagemService } from './mensagem.service';

import { Mensagem } from './mensagem.model';

@Component({
  selector: 'ds-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  cdProjeto: number;
  mensagens: Observable<any>;

  constructor(private mensagemService: MensagemService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.cdProjeto = this.route.parent.snapshot.params['cdProjeto'];

    this.mensagens = this.mensagemService.getMensagensSistema(this.cdProjeto);
  }

}
