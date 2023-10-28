import { TestBed } from '@angular/core/testing';

import { WorldAPIService } from './world-api.service';

describe('WorldAPIService', () => {
  let service: WorldAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
