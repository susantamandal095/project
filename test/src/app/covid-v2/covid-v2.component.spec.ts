import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidV2Component } from './covid-v2.component';

describe('CovidV2Component', () => {
  let component: CovidV2Component;
  let fixture: ComponentFixture<CovidV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
