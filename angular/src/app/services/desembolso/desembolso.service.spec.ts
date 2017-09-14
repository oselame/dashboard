import { TestBed, inject } from '@angular/core/testing';

import { DesembolsoService } from './desembolso.service';

describe('DesembolsoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesembolsoService]
    });
  });

  it('should be created', inject([DesembolsoService], (service: DesembolsoService) => {
    expect(service).toBeTruthy();
  }));
});
