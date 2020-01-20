import { TestBed } from '@angular/core/testing';

import { SignUpInService } from './sign-up-in.service';

describe('SignUpInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpInService = TestBed.get(SignUpInService);
    expect(service).toBeTruthy();
  });
});
