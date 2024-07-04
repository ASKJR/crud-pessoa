import { Component } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrl: './listar-endereco.component.css',
})
export class ListarEnderecoComponent {
  constructor(private enderecoService: EnderecoService) {}
  enderecos: Endereco[] = [];
  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }
  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }
  removerEndereco($event: any, endereco: Endereco) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a endereco ${endereco.rua}?`)) {
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.enderecoService.listarTodos();
    }
  }
}
