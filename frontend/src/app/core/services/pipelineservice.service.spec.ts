import { TestBed } from '@angular/core/testing';

import { PipelineserviceService } from './pipelineservice.service';

describe('PipelineserviceService', () => {
  let service: PipelineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipelineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
