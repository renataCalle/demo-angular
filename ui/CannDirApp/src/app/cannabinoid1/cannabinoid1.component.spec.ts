import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cannabinoid1Component } from './cannabinoid1.component';

describe('Cannabinoid1Component', () => {
  let component: Cannabinoid1Component;
  let fixture: ComponentFixture<Cannabinoid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cannabinoid1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cannabinoid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
