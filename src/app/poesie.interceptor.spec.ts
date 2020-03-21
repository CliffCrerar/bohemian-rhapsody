import { TestBed } from '@angular/core/testing';

import { PoesieInterceptor } from './poesie.interceptor';

describe('PoesieInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PoesieInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PoesieInterceptor = TestBed.inject(PoesieInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
