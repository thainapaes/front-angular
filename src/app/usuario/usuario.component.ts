import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Car } from '../model/Car';
import { User } from '../model/User';
import { UserService } from '../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  exibirBotoes:boolean = true;
  exibirBotoesCarro:boolean = true;
  tabelaVisivel:boolean = true;
  todosUsuarios:boolean = false;

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.email]),
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    telefone: new FormControl(''),
    carsL: new FormControl('')
  });

  cliente = new User();

  users:User[] = [];
  car = new Car();
  carA = new Car();
  carAL:Car[] = [];

  constructor(private service:UserService, private formBuilder: FormBuilder, private router:Router){}

  selecionar():void{
    this.service.selecionar()
    .subscribe(retorno => this.users = retorno);
  }

  ngOnInit(){
    this.selecionar();
  }

  retornarLogin(){
    this.router.navigate(["login"])
  }

  cadastrarUsuario():void{
    this.cliente.carsList = [JSON.parse(this.formulario.value.carsL)];

    this.service.cadastrarUser(this.cliente)
    .subscribe(retorno => {
      this.users.push(retorno);

      this.cliente = new User();
      alert('Usuario Cadastrado com sucesso!')
    });
  }

  selecionarCliente(posicao:number):void{
    this.cliente = this.users[posicao];
    this.formulario.value.carsL = JSON.stringify(this.users[posicao].carsList);

    this.exibirBotoes = false;
    this.tabelaVisivel = false;
  }

  alterarUsuario(id:number):void{
    this.service.alterarUser(this.cliente, id)
    .subscribe(retorno => {
      let posicao = this.users.findIndex(obj => {
        return obj.id == retorno.id;
      });

      this.users[posicao] = retorno;
      this.cliente = new User();

      this.exibirBotoes = true;
      this.tabelaVisivel = true;

      alert('Usuario alterado com sucesso!')
    });
  }

  removerUsuario(id:number):void{

    this.service.remover(id)
    .subscribe(retorno => {
      if (retorno.toString() === "OK") {
        let posicao = this.users.findIndex(() => {
          return id == this.cliente.id;
        });
        this.users.splice(posicao, 1);
        this.cliente = new User();

        this.exibirBotoes = true;
        this.tabelaVisivel = true;

        alert('Usuario excluído com sucesso!');

      } else {
        alert('Não foi possível excluir o usuario');
      }
    });
  }

  cancelar():void {
    this.cliente = new User();
    this.exibirBotoes = true;
    this.tabelaVisivel = true;
  }

}
