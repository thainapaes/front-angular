import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarPatchRequest } from '../model/request/CarPatchRequest';
import { Car } from '../model/Car';
import { CarService } from '../service/car/car.service';
import { CarDeleteRequest } from '../model/request/CarDeleteRequest';
import { CarPostRequest } from '../model/request/CarPostRequest';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export class CarroComponent {

  exibirBotoes: boolean = true;
  tabelaVisivel: boolean = true;
  carPostRequest = new CarPostRequest();
  carPatchRequest = new CarPatchRequest();
  carDeleteRequest = new CarDeleteRequest();

  formulario = new FormGroup({
    id: new FormControl(null),
    licensePlate: new FormControl('', [Validators.required, Validators.maxLength(9)]),
    model: new FormControl(''),
    color: new FormControl(''),
    year: new FormControl(null)
  });

  carro = new Car();
  cars:Car[] = [];

  constructor(private service:CarService) {}

  selecionar(): void{
    this.service.selecionar().subscribe(
      retorno => this.cars = retorno
    );
  }

  ngOnInit(){
    this.selecionar();
  }

  cadastrarCarro():void{
    this.carPostRequest.car = this.carro;
    this.carPostRequest.id = sessionStorage.getItem('id') as unknown as number;
    this.service.cadastrarCar(this.carPostRequest).subscribe(
      retorno => {
        this.cars.push(retorno);

        //limpa o formulário
        this.carro = new Car();
        alert('Carro Cadastrado com sucesso')
      }
    )
  }

  selecionarCarro(posicao:number): void{
    this.carro = this.cars[posicao];
    this.exibirBotoes = false;
    this.tabelaVisivel = false;
  }

  alterarCarro(placa:string): void{
    this.carPatchRequest.licensePlate = placa;
    this.carPatchRequest.car = this.carro;

    this.service.alterarCar(this.carPatchRequest).subscribe(
      retorno => {
        let posicao = this.cars.findIndex(obj => {
          return obj.id == retorno.id;
        });

        this.cars[posicao] = retorno;
        this.carro = new Car();

        this.exibirBotoes = true;
        this.tabelaVisivel = true;

        alert('Usuario alterado com sucesso!');
      }
    )
  }

  cancelar():void {
    this.carro = new Car();
    this.exibirBotoes = true;
    this.tabelaVisivel = true;
  }

  removerCarro(placa:string, id:number): void{
    //this.carDeleteRequest.licensePlate = placa;

    this.service.remover(placa).subscribe(
      retorno => {
        if(retorno.toString() === "OK"){
          let posicao = this.cars.findIndex(() => {
            return id == this.carro.id;
          });

          this.cars.splice(posicao, 1);

          this.carro = new Car();
          this.exibirBotoes = true;
          this.tabelaVisivel = true;

          alert('Carro excluído com sucesso!');
        } else {
          alert('Nao foi possível excluir o carro');
        }
      }
    );
  }

}
