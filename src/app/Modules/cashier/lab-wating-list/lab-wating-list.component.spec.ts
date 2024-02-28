import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabWatingListComponent } from './lab-wating-list.component';

describe('LabWatingListComponent', () => {
  let component: LabWatingListComponent;
  let fixture: ComponentFixture<LabWatingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabWatingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabWatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
