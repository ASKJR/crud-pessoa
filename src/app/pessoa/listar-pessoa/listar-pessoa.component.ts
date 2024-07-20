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
  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }
  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
  }
  removerPessoa($event: any, pessoa: Pessoa) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.pessoaService.listarTodos();
    }
  }

  abrirModalPessoa(pessoa: Pessoa) {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }
}
