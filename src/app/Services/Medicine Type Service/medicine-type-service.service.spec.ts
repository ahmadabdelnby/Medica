import { TestBed } from '@angular/core/testing';

import { MedicineTypeServiceService } from './medicine-type-service.service';

describe('MedicineTypeServiceService', () => {
  let service: MedicineTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
