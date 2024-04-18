import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabUrprofileComponent } from './lab-urprofile.component';

describe('LabUrprofileComponent', () => {
  let component: LabUrprofileComponent;
  let fixture: ComponentFixture<LabUrprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabUrprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabUrprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
