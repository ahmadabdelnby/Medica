import { TestBed } from '@angular/core/testing';

import { PlacePriceServiceService } from './place-price-service.service';

describe('PlacePriceServiceService', () => {
  let service: PlacePriceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacePriceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
