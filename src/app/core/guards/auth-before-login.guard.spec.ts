import { TestBed } from '@angular/core/testing';

import { AuthBeforeLoginGuard } from './auth-before-login.guard';

describe('AuthBeforeLoginGuard', () => {
  let guard: AuthBeforeLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthBeforeLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
