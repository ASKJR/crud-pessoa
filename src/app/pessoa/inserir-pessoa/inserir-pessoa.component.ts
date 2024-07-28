import { Component, ViewChild } from '@angular/core';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
})
export class InserirPessoaComponent {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();
  mensagem = '';
  mensagem_detalhes = '';

  constructor(private pessoaService: PessoaService, private router: Router) {}

  inserir(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.pessoa!).subscribe({
        next: (_pessoa) => {
          this.router.navigate(['/pessoas']);
        },
        error: (err) => {
          this.mensagem = `Erro inserido usuário ${this.pessoa?.nome}`;
          if (err.status == 409) {
            this.mensagem_detalhes = 'Usuário já existente';
          } else {
            this.mensagem_detalhes = `[${err.status}] ${err.message}`;
          }
        },
      });
      this.router.navigate(['/pessoas']);
    }
  }
}
