import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoTabComponent } from './acompanhamento-tab.component';

describe('AcompanhamentoTabComponent', () => {
  let component: AcompanhamentoTabComponent;
  let fixture: ComponentFixture<AcompanhamentoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
