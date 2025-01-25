import { TestBed } from '@angular/core/testing';

import { AeCommonService } from './ae-common.service';

describe('AeCommonService', () => {
  let service: AeCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
