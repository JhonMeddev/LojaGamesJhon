import { environment } from './../../environments/environment.prod';
import { AuthRequest } from './../model/AuthRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game } from '../model/Game';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(authRequest: AuthRequest): Observable<AuthRequest>{
    return this.http.post<AuthRequest>('https://api-labs.tindin.com.br/auth', authRequest).pipe(tap(res => this.saveToken(res)))
  }


  saveToken(authRequest: AuthRequest): AuthRequest{
    localStorage.setItem("Token", authRequest.token)
    return authRequest
  }

  getToken(): string | null {
    return localStorage.getItem("Token")
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }



}
