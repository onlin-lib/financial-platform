import { TestBed } from '@angular/core/testing';

import { RepositoriesApiService } from './repositories-api.service';

describe('RepositoriesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoriesApiService = TestBed.get(RepositoriesApiService);
    expect(service).toBeTruthy();
  });
});
