import { Injectable } from '@angular/core';
import { Cidade } from '../../shared/models/cidade.model';
const LS_CHAVE = 'cidades';
@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  constructor() {}
  listarTodos(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : [];
  }

  inserir(cidade: Cidade) {
    const cidades = this.listarTodos();
    cidade.id = new Date().getTime();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorId(id: number): Cidade | undefined {
    console.log(id);
    return this.listarTodos().find((p) => p.id === id);
  }

  atualizar(cidade: Cidade): void {
    const cidades = this.listarTodos();
    const index = cidades.findIndex((p) => p.id === cidade.id);
    if (index !== -1) {
      cidades[index] = cidade;
      localStorage[LS_CHAVE] = JSON.stringify(cidades);
    }
  }

  remover(id: number): void {
    const cidades = this.listarTodos().filter((p) => p.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
