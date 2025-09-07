import { TestBed } from '@angular/core/testing';

import { DbUsuarios } from './db-usuarios';

describe('DbUsuarios', () => {
  let service: DbUsuarios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbUsuarios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
