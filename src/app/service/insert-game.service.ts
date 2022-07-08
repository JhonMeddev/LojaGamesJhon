import { GameStudio } from './../model/GameStudio';
import { GameCompany } from './../model/GameCompany';
import { Game } from './../model/Game';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertGameService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('x-api-key', environment.token)
  }

  getAllGames(): Observable<Game[]>{
    return this.http.get<Game[]>('https://api-labs.tindin.com.br/games')
  }

  getGameById(): Observable <Game[]>{
    return this.http.get<Game[]>('https://api-labs.tindin.com.br/games/{_id}')
  }

  postGame(game: Game): Observable<Game>{
    return this.http.post<Game>('https://api-labs.tindin.com.br/games', game, this.token)
  }

  getAllCompany(): Observable<GameCompany[]>{
    return this.http.get<GameCompany[]>('https://api-labs.tindin.com.br/games/companies')

  }

  getAllStudio():Observable<GameStudio[]>{
    return this.http.get<GameStudio[]>('https://api-labs.tindin.com.br/games/studios')
  }

}
