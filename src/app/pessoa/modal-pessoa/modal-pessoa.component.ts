import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
})
export class ModalPessoaComponent {
  @Input() pessoa!: Pessoa;
  constructor(public activeModal: NgbActiveModal) {}
}
