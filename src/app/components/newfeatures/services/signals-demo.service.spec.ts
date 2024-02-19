import { TestBed } from '@angular/core/testing';

import { SignalsDemoService } from './signals-demo.service';

describe('SignalsDemoService', () => {
  let service: SignalsDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalsDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
