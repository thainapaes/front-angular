import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../model/Car';
import { CarPatchRequest } from '../../model/request/CarPatchRequest';
import { CarDeleteRequest } from '../../model/request/CarDeleteRequest';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  selecionar(): Observable<Car[]>{
    debugger;
    return this.http.get<Car[]>(this.url + "/cars/" + sessionStorage.getItem('id'));
  }

  cadastrarCar(obj:Car):Observable<Car>{
    return this.http.post<Car>(this.url + "/cars", obj);
  }

  alterarCar(carPatchRequest : CarPatchRequest):Observable<Car>{
    return this.http.patch<Car>(this.url + "/cars/" + sessionStorage.getItem('id'), carPatchRequest);
  }

  remover(carDeleteRequest:CarDeleteRequest):Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(this.url + '/cars/' + sessionStorage.getItem('id'));
  }
}
