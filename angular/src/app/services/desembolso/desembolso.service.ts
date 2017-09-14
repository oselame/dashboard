import { Injectable } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../../app-config.module';

@Injectable()
export class DesembolsoService {

  serverApi = 'http://soft031-075:9190/sigp-services/api/';

  constructor(private config: AppConfig) { 
    console.log(config.apiEndpoint);
  }

}
