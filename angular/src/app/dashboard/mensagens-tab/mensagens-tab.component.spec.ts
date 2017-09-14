import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensTabComponent } from './mensagens-tab.component';

describe('MensagensTabComponent', () => {
  let component: MensagensTabComponent;
  let fixture: ComponentFixture<MensagensTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
