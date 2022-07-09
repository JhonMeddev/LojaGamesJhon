import { ActivatedRoute, Router } from '@angular/router';
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

  gameId: Game = new Game();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inicioService: InicioService
  ) { }

  ngOnInit() {

   let id = this.route.snapshot.params["_id"];
    this.findByIdGame(id)
  }


  findByIdGame(id: string){
    this.inicioService.getGameById(id).subscribe((resp : Game)=>{
      this.gameId = resp
      console.log(this.gameId)
    })
  }

}
