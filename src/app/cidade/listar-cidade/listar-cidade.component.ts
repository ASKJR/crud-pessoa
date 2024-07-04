import { Component } from '@angular/core';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrl: './listar-cidade.component.css',
})
export class ListarCidadeComponent {
  constructor(private cidadeService: CidadeService) {}
  cidades: Cidade[] = [];
  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }
  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }
  removerCidade($event: any, cidade: Cidade) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nome}?`)) {
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.cidadeService.listarTodos();
    }
  }
}
