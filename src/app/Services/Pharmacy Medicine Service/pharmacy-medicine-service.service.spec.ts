import { TestBed } from '@angular/core/testing';

import { PharmacyMedicineServiceService } from './pharmacy-medicine-service.service';

describe('PharmacyMedicineServiceService', () => {
  let service: PharmacyMedicineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyMedicineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
