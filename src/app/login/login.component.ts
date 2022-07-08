import { AuthResponse } from './../model/AuthResponse';
import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { AuthRequest } from './../model/AuthRequest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: AuthRequest = new AuthRequest()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar(){
    this.auth.entrar(this.login).subscribe((resp: AuthRequest)=>{
      this.login = resp

      environment.token = this.login.token
      environment.user = this.login.user

      console.log(environment.token)
      console.log(environment.user)

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 401){
        alert ('Usuario ou senha invalidos !')
      }
    })
  }

}
