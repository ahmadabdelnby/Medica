import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PheumoniaComponent } from './pheumonia.component';

describe('PheumoniaComponent', () => {
  let component: PheumoniaComponent;
  let fixture: ComponentFixture<PheumoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PheumoniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PheumoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
