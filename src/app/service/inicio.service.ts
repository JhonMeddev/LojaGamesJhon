import { Game } from './../model/Game';

import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService{

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<any>{

    return this.http.get<any>('https://api-labs.tindin.com.br/games').pipe(map(({games}) => (games)))
  }

  getGameById(): Observable <Game[]>{
    return this.http.get<Game[]>('https://api-labs.tindin.com.br/games/${_id}')
  }

  getByTitleGames(title: string): Observable<Game[]>{
    return this.http.get<Game[]>(`https://api-labs.tindin.com.br/games/title/${title}`)
  }
}
