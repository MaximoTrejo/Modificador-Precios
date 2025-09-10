import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArticulos } from './detalle-articulos';

describe('DetalleArticulos', () => {
  let component: DetalleArticulos;
  let fixture: ComponentFixture<DetalleArticulos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleArticulos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleArticulos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
