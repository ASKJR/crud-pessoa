import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEditarEnderecoComponent } from './inserir-editar-endereco/inserir-editar-endereco.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarEnderecoComponent, InserirEditarEnderecoComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class EnderecoModule {}
