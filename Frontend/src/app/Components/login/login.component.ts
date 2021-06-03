import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  correo: string;
  contra: string;
  incorrecto = false;

  ngOnInit() {
    if (localStorage.getItem('logued') === '1') {
      localStorage.setItem('logued', '0');
      this.router.navigate(['login']);
    }
    Utils.indices = [
      {
        title: 'Ingresar',
        url: '/login',
        icon: 'mdi-settings-box'
      },
      {
        title: 'Registrarse',
        url: '/registrarse',
        icon: 'mdi-account-multiple-plus'
      }
    ];
  }
  cancelar() {
    this.correo = '';
    this.contra = '';
    this.incorrecto = false;
  }
  entrar() {
    this.router.navigate(['dashboard']);
  }
}
