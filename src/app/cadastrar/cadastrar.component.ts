import { GameStudio } from './../model/GameStudio';
import { GameCompany } from './../model/GameCompany';
import { InsertGameService } from './../service/insert-game.service';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../model/Game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  insertGame: Game = new Game()
  listaGames: Game[]

  insertService: InsertGameService

  constructor(
    private router: Router,
    private insertGameService:InsertGameService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      alert('Desconectado, faça login novamente !')
      this.router.navigate(['/login'])
    }

    this.findAllGames()
  }

  cadastrar(){
   // let payload : any = {...this.insertGame, genres:[this.insertGame.genres]}

    this.insertGameService.postGame(this.insertGame).subscribe((resp: Game)=>{
      this.insertGame = resp
      alert('Game Cadastrado com Sucesso!')
      this.router.navigate(['/inicio'])

    })
  }


  findAllGames(){
    this.insertGameService.getAllGames().subscribe((resp: Game[]) => {
      this.listaGames = resp
      console.log(resp)
    })
  }

  adicionarMidia(){

  }

}
