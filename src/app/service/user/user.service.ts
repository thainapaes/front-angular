import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  informacoes(): Observable<User>{
    return this.http.get<User>(this.url + "/me/" + sessionStorage.getItem('id'));
  }

  selecionar(): Observable<User[]>{
    return this.http.get<User[]>(this.url + "/users");
  }

  cadastrarUser(obj:User):Observable<User>{
    return this.http.post<User>(this.url + "/users", obj);
  }

  alterarUser(obj:User, id:number):Observable<User>{
    return this.http.patch<User>(this.url + "/users/" + id, obj);
  }

  remover(id:number):Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(this.url + '/users/' + id);
  }
}
