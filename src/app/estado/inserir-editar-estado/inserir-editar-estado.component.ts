import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../services/estado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-estado',
  templateUrl: './inserir-editar-estado.component.html',
  styleUrl: './inserir-editar-estado.component.css',
})
export class InserirEditarEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado: Estado = new Estado();
  isEdit: boolean = false;

  constructor(
    private estadoService: EstadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      const fetchedEstado = this.estadoService.buscarPorId(+idParam);

      if (fetchedEstado !== undefined) {
        this.estado = fetchedEstado;
      } else {
        throw new Error('Estado não encontrada: id=' + idParam);
      }
    } else {
      this.isEdit = false;
    }
  }
  handleClik(): void {
    if (this.isEdit) {
      this.editar();
    } else {
      this.inserir();
    }
  }
  inserir(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);
      this.router.navigate(['/estados']);
    }
  }
  editar(): void {
    if (this.formEstado.valid) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
