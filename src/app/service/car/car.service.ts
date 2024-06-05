import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../model/Car';
import { CarPatchRequest } from '../../model/request/CarPatchRequest';
import { CarPostRequest } from '../../model/request/CarPostRequest';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url:string = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  selecionar(): Observable<Car[]>{
    return this.http.get<Car[]>(this.url + "/cars/" + sessionStorage.getItem('id'));
  }

  cadastrarCar(carPostRequest:CarPostRequest):Observable<Car>{
    return this.http.post<Car>(this.url + "/cars", carPostRequest);
  }

  alterarCar(carPatchRequest : CarPatchRequest):Observable<Car>{
    return this.http.patch<Car>(this.url + "/cars/" + sessionStorage.getItem('id'), carPatchRequest);
  }

  remover(licensePlate:string):Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(this.url + '/cars/' + sessionStorage.getItem('id') + "?licensePlate=${" + licensePlate + "}");
  }
}
