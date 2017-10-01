import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevistoRealizadoComponent } from './previsto-realizado.component';

describe('PrevistoRealizadoComponent', () => {
  let component: PrevistoRealizadoComponent;
  let fixture: ComponentFixture<PrevistoRealizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevistoRealizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevistoRealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
