import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRespondidoComponent } from './formulario-respondido.component';

describe('FormularioRespondidoComponent', () => {
  let component: FormularioRespondidoComponent;
  let fixture: ComponentFixture<FormularioRespondidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRespondidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRespondidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
