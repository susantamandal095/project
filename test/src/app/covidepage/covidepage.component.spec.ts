import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidepageComponent } from './covidepage.component';

describe('CovidepageComponent', () => {
  let component: CovidepageComponent;
  let fixture: ComponentFixture<CovidepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
