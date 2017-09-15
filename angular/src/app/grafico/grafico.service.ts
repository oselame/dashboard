import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class GraficoService {
  serverUrl = environment.apiUrl;

  apiAvancodesembolso = this.serverUrl + 'avancodesembolso/';

  constructor(public http: Http) { }

  findPercentualAvancoDesembolsoPorProjeto(cdProjeto) {
    console.log('serverUrl', this.serverUrl);

    return Observable.create((observer: Observer<number>) => {
      observer.next(cdProjeto);
      observer.complete();
    })
  }

  findPercentualAvancoDesembolsoPorProjetoServer(cdProjeto): Observable<any> {
    const url = this.apiAvancodesembolso + 'findPercentualAvancoDesembolsoPorProjeto?cdProjeto=' + cdProjeto;
    console.log('apiAvancodesembolso', url);
    return this.http.get(url)
      .map(vlPerc => vlPerc.json());
  }

  findPercentualAvancoDesembolsoPorProjetoPromisse(cdProjeto): Promise<any> {
    const url = this.apiAvancodesembolso + 'findPercentualAvancoDesembolsoPorProjeto?cdProjeto=' + cdProjeto;
    return this.http.get(url)
      .toPromise()
      .then(vlPerc => vlPerc.json())
      .catch(error => console.log(error));
  }

  findPercentualAvancoDesembolsoPorProjetoX(cdProjeto): Observable<number> {
    const url = this.apiAvancodesembolso + 'findPercentualAvancoDesembolsoPorProjeto?cdProjeto=' + cdProjeto;
    // console.log('apiAvancodesembolso', url);
    return this.http.get(url).map((res: Response) => res.json());
  }


}
