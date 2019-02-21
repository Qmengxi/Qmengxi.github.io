import { TestBed } from '@angular/core/testing';

import { ThreeLevelLinkageService } from './three-level-linkage.service';

describe('ThreeLevelLinkageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreeLevelLinkageService = TestBed.get(ThreeLevelLinkageService);
    expect(service).toBeTruthy();
  });
});
