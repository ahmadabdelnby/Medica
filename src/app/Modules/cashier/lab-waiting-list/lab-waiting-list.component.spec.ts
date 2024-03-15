import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabWaitingListComponent } from './lab-waiting-list.component';

describe('LabWaitingListComponent', () => {
  let component: LabWaitingListComponent;
  let fixture: ComponentFixture<LabWaitingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabWaitingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabWaitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
