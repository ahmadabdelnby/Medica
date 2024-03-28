import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicloginComponent } from './cliniclogin.component';

describe('ClinicloginComponent', () => {
  let component: ClinicloginComponent;
  let fixture: ComponentFixture<ClinicloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
