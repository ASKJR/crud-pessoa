import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario, Login } from '../../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LS_CHAVE = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL = 'http://localhost:3000/usuarios/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

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
    return this.httpClient.get<Usuario[]>(this.BASE_URL, this.httpOptions).pipe(
      map((lista) => {
        let usu = lista.find(
          (u) => u.login === login.login && u.senha === login.senha
        );
        if (usu != undefined) {
          return usu;
        } else {
          return null;
        }
      })
    );
  }
}
