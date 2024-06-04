import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from '../model/Car';
import { CarService } from '../service/car/car.service';

@Component({
  selector: 'app-carros-components',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './carros.component.html',
  styleUrl: './carros.component.css'
})
export class CarrosComponentsComponent {
  exibirBotoes:boolean = true;
  tabelaVisivel:boolean = true;

  formulario = new FormGroup({
    id: new FormControl(null),
    placa: new FormControl('', Validators.required),
    modelo: new FormControl(''),
    cor: new FormControl(''),
    car_year: new FormControl(null)
  });

  carro = new Car();

  cars:Car[] = [];

  constructor(private service:CarService){}

  selecionar():void{
    this.service.selecionar()
    .subscribe(retorno => this.cars = retorno);
  }

  ngOnInit(){
    this.selecionar();
  }

  cadastrarCarro():void{
    this.service.cadastrarCar(this.carro)
    .subscribe(retorno => {
      this.cars.push(retorno);

      this.carro = new Car();
      alert('Carro Cadastrado com sucesso!')
    });
  }

  selecionarCarro(posicao:number):void{
    this.carro = this.cars[posicao];
    this.exibirBotoes = false;
    this.tabelaVisivel = false;
  }

  alterarCarro(id:number):void{
    this.service.alterarCar(this.carro, id)
    .subscribe(retorno => {
      let posicao = this.cars.findIndex(obj => {
        return obj.id == retorno.id;
      });

      this.cars[posicao] = retorno;
      this.carro = new Car();

      this.exibirBotoes = true;
      this.tabelaVisivel = true;

      alert('Usuario alterado com sucesso!')
    });
  }

  removerCarro(id:number):void{
    this.service.remover(id)
    .subscribe(retorno => {
      debugger;
      if (retorno.toString() === "OK") {
        let posicao = this.cars.findIndex(() => {
          return id == this.carro.id;
        });
        this.cars.splice(posicao, 1);
        this.carro = new Car();

        this.exibirBotoes = true;
        this.tabelaVisivel = true;

        alert('Carro excluído com sucesso!');

      } else {
        alert('Não foi possível excluir o carro');
      }
    });
  }

  cancelar():void {
    this.carro = new Car();
    this.exibirBotoes = true;
    this.tabelaVisivel = true;
  }

}
