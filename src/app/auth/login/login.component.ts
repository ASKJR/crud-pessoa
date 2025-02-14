import { Component, ViewChild } from '@angular/core';
import { Login } from '../../shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;
  mensagem = '';
  mensagem_detalhes = '';
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/home']);
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.message = params['error'];
    });
  }

  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe({
        next: (usu) => {
          if (usu != null) {
            this.loginService.usuarioLogado = usu;
            this.loading = false;
            this.router.navigate(['/home']);
          } else {
            this.message = 'Usuário/Senha inválidos.';
          }
        },
        error: (err) => {
          this.mensagem = `Login inválido`;
          this.mensagem_detalhes = `[${err.status}] ${err.mensagem}`;
        },
      });
    }
    this.loading = false;
  }
}
