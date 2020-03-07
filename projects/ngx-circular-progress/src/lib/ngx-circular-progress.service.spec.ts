import { TestBed } from '@angular/core/testing';

import { NgxCircularProgressService } from './ngx-circular-progress.service';

describe('NgxCircularProgressService', () => {
  let service: NgxCircularProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCircularProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
