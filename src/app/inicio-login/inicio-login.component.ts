import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-login',
  templateUrl: './inicio-login.component.html',
  styleUrls: ['./inicio-login.component.css']
})
export class InicioLoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      alert('Desconectado, faça login novamente !')
      this.router.navigate(['/login'])
    }
  }

}
