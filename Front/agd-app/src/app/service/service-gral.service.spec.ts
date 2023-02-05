import { TestBed } from '@angular/core/testing';

import { ServiceGralService } from './service-gral.service';

describe('ServiceGralService', () => {
  let service: ServiceGralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
