import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa';
import { CidadeModule } from './cidade/cidade.module';
import { EstadoModule } from './estado/estado.module';
import { EnderecoModule } from './endereco/endereco.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    CidadeModule,
    EstadoModule,
    EnderecoModule,
    AuthModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    HttpClientModule,
    UsuarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
