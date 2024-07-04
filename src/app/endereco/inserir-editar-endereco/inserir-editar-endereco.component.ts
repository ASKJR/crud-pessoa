import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnderecoService } from '../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-inserir-editar-endereco',
  templateUrl: './inserir-editar-endereco.component.html',
  styleUrl: './inserir-editar-endereco.component.css',
})
export class InserirEditarEnderecoComponent {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco: Endereco = new Endereco();
  isEdit: boolean = false;

  constructor(
    private enderecoService: EnderecoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      const fetchedEndereco = this.enderecoService.buscarPorId(+idParam);

      if (fetchedEndereco !== undefined) {
        this.endereco = fetchedEndereco;
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
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
  editar(): void {
    if (this.formEndereco.valid) {
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
