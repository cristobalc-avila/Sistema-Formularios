import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponderFormularioComponent } from './reponder-formulario.component';

describe('ReponderFormularioComponent', () => {
  let component: ReponderFormularioComponent;
  let fixture: ComponentFixture<ReponderFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponderFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponderFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
