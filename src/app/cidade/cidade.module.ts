import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CidadeService } from './services/cidade.service';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { InserirEditarCidadeComponent } from './inserir-editar-cidade/inserir-editar-cidade.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [ListarCidadeComponent, InserirEditarCidadeComponent],
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule],
  providers: [CidadeService],
})
export class CidadeModule {}
