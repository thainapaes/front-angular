import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';
import { LoginRequest } from '../../model/request/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  login(loginRequest : LoginRequest){
    debugger;
    return this.httpClient.post<LoginResponse>(this.url + "/signin", loginRequest).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("id", value.id.toString())
      })
    )
  }
}
