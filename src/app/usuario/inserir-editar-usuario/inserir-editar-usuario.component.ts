import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../shared';
import { filter, first, max } from 'rxjs';

@Component({
  selector: 'app-inserir-editar-usuario',
  templateUrl: './inserir-editar-usuario.component.html',
  styleUrl: './inserir-editar-usuario.component.css',
})
export class InserirEditarUsuarioComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario!: NgForm;
  novoUsuario: boolean = true;
  usuario: Usuario = new Usuario();
  id!: string;
  loading!: boolean;
  senhaAntiga: string = '';
  lastestId: number = 0;
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.usuario = new Usuario();
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.novoUsuario = !this.id;
    if (!this.novoUsuario) {
      this.usuarioService.buscarPorId(this.id).subscribe((usuario) => {
        this.usuario = usuario;
        this.senhaAntiga = usuario.senha ? usuario.senha : '';
        this.usuario.senha = '';
      });
    }
  }

  salvar(): void {
    this.loading = true;
    if (this.formUsuario.form.valid) {
      if (this.novoUsuario) {
        this.usuarioService.inserir(this.usuario).subscribe((usuario) => {
          this.loading = false;
          this.router.navigate(['/usuarios']);
        });
      } else {
        if (this.usuario.senha === '') {
          this.usuario.senha = this.senhaAntiga;
        }
        this.usuarioService.alterar(this.usuario).subscribe((usuario) => {
          this.loading = false;
          this.router.navigate(['/usuarios']);
        });
      }
    }
    this.loading = false;
  }
}
