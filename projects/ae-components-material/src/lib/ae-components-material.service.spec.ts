import { TestBed } from '@angular/core/testing';

import { AeComponentsMaterialService } from './ae-components-material.service';

describe('AeComponentsMaterialService', () => {
  let service: AeComponentsMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeComponentsMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
