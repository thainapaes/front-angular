import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output("navegate") onNavigate = new EventEmitter();
  disableLoginButton: boolean = true;

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router:Router, private loginService: LoginService, private toastService: ToastrService) {}

  submit() {
    this.loginService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe({
      next: () => this.router.navigate(["carro"]),
      error: () => this.toastService.error("Invalid login or password")
    })
  }

  navigate(){
    this.router.navigate(["usuario"]);
  }

}
