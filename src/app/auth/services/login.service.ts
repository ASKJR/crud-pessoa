import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from '../../shared';

const LS_CHAVE = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public get usuarioLogado(): Usuario {
    let usuario = localStorage[LS_CHAVE];
    return usuario ? JSON.parse(usuario) : null;
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario | null> {
    let usuario = new Usuario(1, login.login, login.login, login.senha, 'FUNC');
    if (login.login === login.senha) {
      if (login.login === 'admin') {
        usuario.perfil = 'ADMIN';
      } else if (login.login === 'gerente') {
        usuario.perfil = 'GERENTE';
      }
      return of(usuario);
    } else {
      return of(null);
    }
  }
}
