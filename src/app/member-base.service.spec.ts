import { TestBed } from '@angular/core/testing';

import { MemberBaseService } from './member-base.service';

describe('MemberBaseService', () => {
  let service: MemberBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
