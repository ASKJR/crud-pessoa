import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from '../../shared';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-cidade',
  templateUrl: './inserir-editar-cidade.component.html',
  styleUrl: './inserir-editar-cidade.component.css',
})
export class InserirEditarCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade: Cidade = new Cidade();
  isEdit: boolean = false;

  constructor(
    private cidadeService: CidadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      const fetchedCidade = this.cidadeService.buscarPorId(+idParam);

      if (fetchedCidade !== undefined) {
        this.cidade = fetchedCidade;
      } else {
        throw new Error('Cidade não encontrada: id=' + idParam);
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
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
  editar(): void {
    if (this.formCidade.valid) {
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
