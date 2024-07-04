import { Injectable } from '@angular/core';
import { Pessoa } from '../../shared/models/pessoa.model';

const LS_CHAVE = 'pessoas';
@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor() {}
  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa) {
    const pessoas = this.listarTodos();
    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa | undefined {
    console.log(id);
    return this.listarTodos().find((p) => p.id === id);
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas = this.listarTodos();
    const index = pessoas.findIndex((p) => p.id === pessoa.id);
    if (index !== -1) {
      pessoas[index] = pessoa;
      localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    }
  }

  remover(id: number): void {
    const pessoas = this.listarTodos().filter((p) => p.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
