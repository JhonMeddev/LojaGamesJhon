import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.user =  {
       _id: ''
    }
  }

}
