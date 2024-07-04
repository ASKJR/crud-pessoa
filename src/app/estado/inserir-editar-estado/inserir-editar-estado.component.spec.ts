import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEditarEstadoComponent } from './inserir-editar-estado.component';

describe('InserirEditarEstadoComponent', () => {
  let component: InserirEditarEstadoComponent;
  let fixture: ComponentFixture<InserirEditarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirEditarEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEditarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
