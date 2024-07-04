import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEditarCidadeComponent } from './inserir-editar-cidade.component';

describe('InserirEditarCidadeComponent', () => {
  let component: InserirEditarCidadeComponent;
  let fixture: ComponentFixture<InserirEditarCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirEditarCidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEditarCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
