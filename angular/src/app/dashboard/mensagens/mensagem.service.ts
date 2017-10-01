import { Mensagem } from './mensagem.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from './../../../environments/environment';

@Injectable()
export class MensagemService {
 // pendencia/buscaPendenciasDoSistema?cdProjeto=33
  apiRest: string = environment.serverApi;

  constructor(private http: Http) {}

  getMensagensSistema(cdProjeto) {
    return this.http.get(`${this.apiRest}/pendencia/buscaPendenciasDoSistema?cdProjeto=${cdProjeto}`)
      .map(pendencias => pendencias.json());
  }

}
