import { TestBed } from '@angular/core/testing';

import { DbServicios } from './db-servicios';

describe('DbServicios', () => {
  let service: DbServicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbServicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
