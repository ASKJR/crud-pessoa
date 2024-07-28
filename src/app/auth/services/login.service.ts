import { Injectable } from '@angular/core';
import { map, Observable, of, catchError, throwError } from 'rxjs';
import { Usuario, Login } from '../../shared';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const LS_CHAVE = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL = 'http://localhost:8080/login';
  httpOptions = {
    observe: 'response' as 'response',
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
    return this.httpClient
      .post<Usuario>(this.BASE_URL, JSON.stringify(login), this.httpOptions)
      .pipe(
        map((resp: HttpResponse<Usuario>) => {
          if (resp.status != 200) {
            return null;
          } else {
            return resp.body;
          }
        }),
        catchError((e) => {
          return throwError(() => e);
        })
      );
  }
}
