import { TestBed } from '@angular/core/testing';

import { ParkDataService } from './park-data.service';

describe('ParkDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkDataService = TestBed.get(ParkDataService);
    expect(service).toBeTruthy();
  });
});
