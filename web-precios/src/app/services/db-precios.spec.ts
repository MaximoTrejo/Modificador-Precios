import { TestBed } from '@angular/core/testing';

import { DbPrecios } from './db-precios';

describe('DbPrecios', () => {
  let service: DbPrecios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbPrecios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
