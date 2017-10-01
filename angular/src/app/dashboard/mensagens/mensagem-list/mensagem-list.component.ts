import { Component, Input, OnInit } from '@angular/core';

import { Mensagem } from './../mensagem.model';

@Component({
  selector: 'ds-mensagem-list',
  templateUrl: './mensagem-list.component.html',
  styleUrls: ['./mensagem-list.component.css']
})
export class MensagemListComponent implements OnInit {

  @Input() mensagem: Mensagem;

  constructor() { }

  ngOnInit() {
  }

}
