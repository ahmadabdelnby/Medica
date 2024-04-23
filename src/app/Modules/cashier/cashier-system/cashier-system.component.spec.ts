import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierSystemComponent } from './cashier-system.component';

describe('CashierSystemComponent', () => {
  let component: CashierSystemComponent;
  let fixture: ComponentFixture<CashierSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashierSystemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CashierSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
