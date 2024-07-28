import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../../shared/models/pessoa.model';
import { ModalPessoaComponent } from '../modal-pessoa/modal-pessoa.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css',
})
export class ListarPessoaComponent implements OnInit {
  constructor(
    private pessoaService: PessoaService,
    private modalService: NgbModal
  ) {}
  pessoas: Pessoa[] = [];
  mensagem = '';
  mensagem_detalhes = '';
  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }
  listarTodos(): Pessoa[] {
    this.pessoaService.listarTodos().subscribe({
      next: (data: Pessoa[] | null) => {
        if (data == null) {
          this.pessoas = [];
        } else {
          this.pessoas = data;
        }
      },
      error: (err) => {
        this.mensagem = 'Error buscando a lista de usuários';
        this.mensagem_detalhes = `[${err.status}] ${err.mensagem}`;
      },
    });
    return this.pessoas;
  }
  removerPessoa($event: any, pessoa: Pessoa) {
    $event.preventDefault();
    this.mensagem = '';
    this.mensagem_detalhes = '';
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa.id!).subscribe({
        complete: () => {
          this.listarTodos();
        },
        error: (err) => {
          this.mensagem = `Error removendo pessoa ${pessoa.id} - ${pessoa.nome}`;
          this.mensagem_detalhes = `[${err.status}] ${err.mensagem}`;
        },
      });
    }
  }

  abrirModalPessoa(pessoa: Pessoa) {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }
}
