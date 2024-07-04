import { Injectable } from '@angular/core';
import { Endereco } from '../../shared/models/endereco.model';
const LS_CHAVE = 'enderecos';
@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor() {}

  listarTodos(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserir(endereco: Endereco) {
    const enderecos = this.listarTodos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  buscarPorId(id: number): Endereco | undefined {
    console.log(id);
    return this.listarTodos().find((p) => p.id === id);
  }

  atualizar(endereco: Endereco): void {
    const enderecos = this.listarTodos();
    const index = enderecos.findIndex((p) => p.id === endereco.id);
    if (index !== -1) {
      enderecos[index] = endereco;
      localStorage[LS_CHAVE] = JSON.stringify(enderecos);
    }
  }

  remover(id: number): void {
    const enderecos = this.listarTodos().filter((p) => p.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
