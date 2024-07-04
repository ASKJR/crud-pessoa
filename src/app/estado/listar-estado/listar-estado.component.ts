import { Component } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../../shared/models/estado.model';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrl: './listar-estado.component.css',
})
export class ListarEstadoComponent {
  constructor(private estadoService: EstadoService) {}
  estados: Estado[] = [];
  ngOnInit(): void {
    this.estados = this.listarTodos();
  }
  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }
  removerEstado($event: any, estado: Estado) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a estado ${estado.nome}?`)) {
      this.estadoService.remover(estado.id!);
      this.estados = this.estadoService.listarTodos();
    }
  }
}
