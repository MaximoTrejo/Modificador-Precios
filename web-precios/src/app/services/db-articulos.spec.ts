import { TestBed } from '@angular/core/testing';

import { DbArticulos } from './db-articulos';

describe('DbArticulos', () => {
  let service: DbArticulos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbArticulos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
