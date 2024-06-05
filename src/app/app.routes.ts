import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './autenticacao/rota.guard';
import { CarroComponent } from './carro/carro.component';
import { LogadoComponent } from './logado/logado.component';

export const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'carro', component:CarroComponent, canActivate: [AuthGuard]},
  {path:'me', component:LogadoComponent, canActivate: [AuthGuard]},
  {path:'', redirectTo:'/usuario', pathMatch: 'full'},
  {path: '**', component:ErrorPageComponent}
];
