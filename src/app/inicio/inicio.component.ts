import { AuthService } from './../service/auth.service';
import { PhotoModel } from './../model/PhotoModel';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Game } from './../model/Game';
import { Component, OnInit } from '@angular/core';
import { InicioService } from '../service/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

 public listaGames$: Observable<Game[]>


 titleGame: string
 listaGames: Game[]

 pag : Number = 1 ;
 contador : Number = 5;


  constructor(
    private router: Router,
    public auth: AuthService,
    private inicioService: InicioService
  ) { }

  ngOnInit(){
    this.listaGames$ = this.inicioService.getAllGames()

  }

  findByTitle(){
    if(this.titleGame == ''){
      this.inicioService.getAllGames
    }else{
      this.inicioService.getByTitleGames(this.titleGame).subscribe((resp: Game[])=>{
        this.listaGames = resp
      })
    }
  }

}
