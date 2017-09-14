import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class GraficoService {
  //-- http://soft031-075:9190/sigp-services/api/avancodesembolso/findPercentualAvancoDesembolsoPorProjeto?cdProjeto=39
  serverUrl = 'http://soft031-075.softplan.com.br:9190/sigp-services/api/';
  apiAvancodesembolso = this.serverUrl + 'avancodesembolso/';
  apiGraficos = this.serverUrl + 'grafico/';
  apiDocumento = this.serverUrl + 'documento/'

  constructor(public http: Http) { }

  findPercentualAvancoDesembolsoPorProjeto() {
    return Observable.create((observer: Observer<number>) => {
      observer.next(99);
      observer.complete();
    })
  }

}
