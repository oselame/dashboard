import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaComponent } from './poa.component';

describe('PoaComponent', () => {
  let component: PoaComponent;
  let fixture: ComponentFixture<PoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
