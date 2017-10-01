import { Component, Input, OnInit } from '@angular/core';
import { Mensagem } from './../mensagem.model';

@Component({
  selector: 'ds-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() mensagem: Mensagem;

  constructor() { }

  ngOnInit() {
    // console.log(this.mensagem);
  }

}
