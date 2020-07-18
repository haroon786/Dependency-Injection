import { TestBed } from '@angular/core/testing';

import { UpdateLogService } from './update-log.service';

describe('UpdateLogService', () => {
  let service: UpdateLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
