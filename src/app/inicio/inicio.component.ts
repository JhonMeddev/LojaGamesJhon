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

  constructor(
    private router: Router,
    private inicioService: InicioService
  ) { }

  ngOnInit(){
    this.listaGames$ = this.inicioService.getAllGames()

  }


}
