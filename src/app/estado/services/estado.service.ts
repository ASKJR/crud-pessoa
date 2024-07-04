import { Injectable } from '@angular/core';
import { Estado } from '../../shared/models/estado.model';
const LS_CHAVE = 'estados';
@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  constructor() {}
  listarTodos(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados) : [];
  }

  inserir(estado: Estado) {
    const estados = this.listarTodos();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id: number): Estado | undefined {
    console.log(id);
    return this.listarTodos().find((p) => p.id === id);
  }

  atualizar(estado: Estado): void {
    const estados = this.listarTodos();
    const index = estados.findIndex((p) => p.id === estado.id);
    if (index !== -1) {
      estados[index] = estado;
      localStorage[LS_CHAVE] = JSON.stringify(estados);
    }
  }

  remover(id: number): void {
    const estados = this.listarTodos().filter((p) => p.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
