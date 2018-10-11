import { TestBed, inject } from '@angular/core/testing';

import { ParkDataService } from './park-data.service';

describe('ParkDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkDataService]
    });
  });

  it('should be created', inject([ParkDataService], (service: ParkDataService) => {
    expect(service).toBeTruthy();
  }));
});
