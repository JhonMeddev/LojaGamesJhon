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
    headers: new HttpHeaders().set('x-api-key', localStorage.getItem("Token") || '')
  }

  getAllGames(): Observable<Game[]>{
    return this.http.get<Game[]>('https://api-labs.tindin.com.br/games')
  }

  getGameById(): Observable <Game[]>{
    return this.http.get<Game[]>('https://api-labs.tindin.com.br/games/${_id}')
  }

  postGame(game: Game): Observable<Game>{
    return this.http.post<Game>('https://api-labs.tindin.com.br/games', game, this.token)
  }

}
