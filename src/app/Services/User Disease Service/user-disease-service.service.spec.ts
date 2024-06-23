import { TestBed } from '@angular/core/testing';

import { UserDiseaseServiceService } from './user-disease-service.service';

describe('UserDiseaseServiceService', () => {
  let service: UserDiseaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDiseaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
