import { Router } from '@angular/router';
import { InicioService } from './../service/inicio.service';
import { Game } from './../model/Game';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public game: Observable<Game[]>

  constructor(
    private router: Router,
    private inicioService: InicioService
  ) { }

  ngOnInit(): void {

    this.game = this.inicioService.getGameById()
  }

}
