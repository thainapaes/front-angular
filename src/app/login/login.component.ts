import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { LoginRequest } from '../model/request/LoginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output("navegate") onNavigate = new EventEmitter();
  desabilitarLoginBtn: boolean = true;
  loginRequest = new LoginRequest();

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router:Router, private loginService: LoginService, private toastService: ToastrService) {}

  submit() {
    this.loginRequest.login = this.loginForm.value.login;
    this.loginRequest.password = this.loginForm.value.password;

    this.loginService.login(this.loginRequest).subscribe({
      next: () => this.router.navigate(["carro"]),
      error: () => this.toastService.error("Invalid login or password")
    })
  }

  navigate(){
    this.router.navigate(["usuario"]);
  }

}
