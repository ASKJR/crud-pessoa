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
  constructor(
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];
    const fetchedPessoa = this.pessoaService.buscarPorId(id);

    if (fetchedPessoa !== undefined) {
      this.pessoa = fetchedPessoa;
    } else {
      throw new Error('Pessoas não encontrada: id=' + id);
    }
  }

  editar(): void {
    if (this.formPessoa.valid) {
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
