import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cannabinoid2Component } from './cannabinoid2.component';

describe('Cannabinoid2Component', () => {
  let component: Cannabinoid2Component;
  let fixture: ComponentFixture<Cannabinoid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cannabinoid2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cannabinoid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
