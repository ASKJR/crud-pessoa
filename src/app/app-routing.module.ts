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
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar',
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC',
    },
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC',
    },
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC',
    },
  },
  {
    path: 'cidades/listar',
    component: ListarCidadeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'cidades',
    redirectTo: 'cidades/listar',
  },
  {
    path: 'cidades/novo',
    component: InserirEditarCidadeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'cidades/editar/:id',
    component: InserirEditarCidadeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN',
    },
  },
  {
    path: 'estados/listar',
    component: ListarEstadoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,FUNC',
    },
  },
  {
    path: 'estados',
    redirectTo: 'estados/listar',
  },
  {
    path: 'estados/novo',
    component: InserirEditarEstadoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,FUNC',
    },
  },
  {
    path: 'estados/editar/:id',
    component: InserirEditarEstadoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,FUNC',
    },
  },

  {
    path: 'enderecos/listar',
    component: ListarEnderecoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,GERENTE',
    },
  },
  {
    path: 'enderecos',
    redirectTo: 'enderecos/listar',
  },
  {
    path: 'enderecos/novo',
    component: InserirEditarEnderecoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,GERENTE',
    },
  },
  {
    path: 'enderecos/editar/:id',
    component: InserirEditarEnderecoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,GERENTE',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNC',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
