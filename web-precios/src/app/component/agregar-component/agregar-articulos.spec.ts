import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarArticulos } from './agregar-articulos';

describe('AgregarArticulos', () => {
  let component: AgregarArticulos;
  let fixture: ComponentFixture<AgregarArticulos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarArticulos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarArticulos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
