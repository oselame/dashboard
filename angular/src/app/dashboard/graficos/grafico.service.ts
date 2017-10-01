import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { environment } from './../../../environments/environment';

@Injectable()
export class GraficoService {

  apiRest: string = environment.serverApi;

  constructor(private http: Http) { }

  getPercentualAvancoDesembolsoPorProjeto(cdProjeto): Observable<any> {
    console.log(cdProjeto);
    
    return this.http.get(`${this.apiRest}/avancodesembolso/findPercentualAvancoDesembolsoPorProjeto?cdProjeto=${cdProjeto}`)
      .map(vlPercentual => vlPercentual.json());
  }

}
