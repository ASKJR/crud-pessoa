import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEditarEnderecoComponent } from './inserir-editar-endereco.component';

describe('InserirEditarEnderecoComponent', () => {
  let component: InserirEditarEnderecoComponent;
  let fixture: ComponentFixture<InserirEditarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirEditarEnderecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEditarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
