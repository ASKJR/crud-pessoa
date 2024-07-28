import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../shared/models/pessoa.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();
  mensagem = '';
  mensagem_detalhes = '';
  botaoDesabilitado = false;
  constructor(
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];
    this.pessoaService.buscarPorId(id).subscribe({
      next: (p) => {
        if (p != null) {
          this.pessoa = p;
        } else {
          this.mensagem = `Erro buscando pessoa ${id}`;
          this.mensagem_detalhes = `Pessoa não encontrado ${id}`;
          this.botaoDesabilitado = true;
        }
      },
      error: (err) => {
        this.mensagem = `Erro buscando pessoa ${id}`;
        this.mensagem_detalhes = `[${err.status}] ${err.message}`;
        this.botaoDesabilitado = true;
      },
    });
  }

  editar(): void {
    if (this.formPessoa.valid) {
      this.pessoaService.alterar(this.pessoa!).subscribe({
        next: (_pessoa) => {
          this.router.navigate(['/pessoas']);
        },
        error: (err) => {
          this.mensagem = `Erro inserido pessoa ${this.pessoa?.nome}`;
          if (err.status == 409) {
            this.mensagem_detalhes = 'Pessoa já existente';
          } else {
            this.mensagem_detalhes = `[${err.status}] ${err.message}`;
          }
        },
      });
      this.router.navigate(['/pessoas']);
    }
  }
}
