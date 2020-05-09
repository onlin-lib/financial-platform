import { TestBed } from '@angular/core/testing';

import { RepositoriesLogicService } from './repositories-logic.service';

describe('RepositoriesLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoriesLogicService = TestBed.get(RepositoriesLogicService);
    expect(service).toBeTruthy();
  });
});
