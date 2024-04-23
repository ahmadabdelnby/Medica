import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicWaitingListComponent } from './clinic-waiting-list.component';

describe('ClinicWaitingListComponent', () => {
  let component: ClinicWaitingListComponent;
  let fixture: ComponentFixture<ClinicWaitingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicWaitingListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicWaitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
