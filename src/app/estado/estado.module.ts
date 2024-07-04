import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { InserirEditarEstadoComponent } from './inserir-editar-estado/inserir-editar-estado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EstadoService } from './services/estado.service';

@NgModule({
  declarations: [ListarEstadoComponent, InserirEditarEstadoComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [EstadoService],
})
export class EstadoModule {}
