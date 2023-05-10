import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscencesComponent } from './abscences.component';

describe('AbscencesComponent', () => {
  let component: AbscencesComponent;
  let fixture: ComponentFixture<AbscencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbscencesComponent]
    });
    fixture = TestBed.createComponent(AbscencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
