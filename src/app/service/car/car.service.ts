import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../model/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  selecionar(): Observable<Car[]>{
    return this.http.get<Car[]>(this.url + "/cars");
  }

  cadastrarCar(obj:Car):Observable<Car>{
    return this.http.post<Car>(this.url + "/cars", obj);
  }

  alterarCar(obj:Car, id:number):Observable<Car>{
    return this.http.patch<Car>(this.url + "/cars/" + id, obj);
  }

  remover(id:number):Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(this.url + '/cars/' + id);
  }
}
