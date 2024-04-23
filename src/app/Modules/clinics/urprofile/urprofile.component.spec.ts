import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrprofileComponent } from './urprofile.component';

describe('UrprofileComponent', () => {
  let component: UrprofileComponent;
  let fixture: ComponentFixture<UrprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrprofileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UrprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
