import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnchartComponent } from './columnchart.component';

describe('ColumnchartComponent', () => {
  let component: ColumnchartComponent;
  let fixture: ComponentFixture<ColumnchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
