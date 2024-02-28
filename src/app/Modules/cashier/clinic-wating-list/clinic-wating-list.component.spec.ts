import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicWatingListComponent } from './clinic-wating-list.component';

describe('ClinicWatingListComponent', () => {
  let component: ClinicWatingListComponent;
  let fixture: ComponentFixture<ClinicWatingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicWatingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicWatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
