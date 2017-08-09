import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GraficoService {

  serverUrl = 'http://soft031-075.softplan.com.br:9190/sigp-services/';
  apiGraficos = this.serverUrl + 'api/grafico/';
  apiDocumento = this.serverUrl + 'api/documento/'

  constructor(public http: Http) { }

  findDadosAvancoDesembolsoGraficoGaugeSolid() {
    const url = this.apiGraficos + 'findDadosAvancoDesembolsoGraficoGaugeSolid?cdProjeto=38';
    console.log("url: " + url);
    return this.http.get(url).map(res => res.json());
  }

  findTotalPagamentoPendentesPorOrigem() {
    const url = this.apiDocumento + 'findTotalPagamentoPendentesPorOrigem?cdProjeto=38';
    console.log("url: " + url);
    return this.http.get(url).map(res => res.json());
  }

}
