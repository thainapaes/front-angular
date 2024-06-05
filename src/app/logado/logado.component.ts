import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-logado',
  standalone: true,
  imports: [],
  templateUrl: './logado.component.html',
  styleUrl: './logado.component.css'
})
export class LogadoComponent {


  constructor(private service:UserService){}

  user = new User();


  selecionar():void{
    this.service.informacoes()
    .subscribe(retorno => this.user = retorno);
  }

  ngOnInit(){
    this.selecionar();
  }

}
