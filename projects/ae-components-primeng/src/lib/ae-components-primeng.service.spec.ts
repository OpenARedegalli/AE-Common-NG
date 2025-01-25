import { TestBed } from '@angular/core/testing';

import { AeComponentsPrimengService } from './ae-components-primeng.service';

describe('AeComponentsPrimengService', () => {
  let service: AeComponentsPrimengService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeComponentsPrimengService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
