import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { InserirEditarCidadeComponent } from './cidade/inserir-editar-cidade/inserir-editar-cidade.component';
import { InserirEditarEstadoComponent } from './estado/inserir-editar-estado/inserir-editar-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';
import { InserirEditarEnderecoComponent } from './endereco/inserir-editar-endereco/inserir-editar-endereco.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas/listar',
    pathMatch: 'full',
  },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar',
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
  },
  {
    path: 'cidades/listar',
    component: ListarCidadeComponent,
  },
  {
    path: 'cidades',
    redirectTo: 'cidades/listar',
  },
  {
    path: 'cidades/novo',
    component: InserirEditarCidadeComponent,
  },
  {
    path: 'cidades/editar/:id',
    component: InserirEditarCidadeComponent,
  },
  {
    path: 'estados/listar',
    component: ListarEstadoComponent,
  },
  {
    path: 'estados',
    redirectTo: 'estados/listar',
  },
  {
    path: 'estados/novo',
    component: InserirEditarEstadoComponent,
  },
  {
    path: 'estados/editar/:id',
    component: InserirEditarEstadoComponent,
  },

  {
    path: 'enderecos/listar',
    component: ListarEnderecoComponent,
  },
  {
    path: 'enderecos',
    redirectTo: 'enderecos/listar',
  },
  {
    path: 'enderecos/novo',
    component: InserirEditarEnderecoComponent,
  },
  {
    path: 'enderecos/editar/:id',
    component: InserirEditarEnderecoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
