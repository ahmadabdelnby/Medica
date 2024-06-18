import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReservationsComponent } from './lab-reservations.component';

describe('LabReservationsComponent', () => {
  let component: LabReservationsComponent;
  let fixture: ComponentFixture<LabReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabReservationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
