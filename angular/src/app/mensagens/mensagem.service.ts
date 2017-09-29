import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from './../../environments/environment.prod';

@Injectable()
export class MensagemService {

  apiRest: string = environment.serverApi;

  constructor(private http: Http) {}

  getMensagens() {
    
  }

}
