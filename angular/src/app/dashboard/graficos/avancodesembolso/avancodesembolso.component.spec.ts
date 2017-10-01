import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancodesembolsoComponent } from './avancodesembolso.component';

describe('AvancodesembolsoComponent', () => {
  let component: AvancodesembolsoComponent;
  let fixture: ComponentFixture<AvancodesembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvancodesembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancodesembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
