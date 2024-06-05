import { Routes } from '@angular/router';
import { CarrosComponent } from './carros/carros.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './autentication/rota.guard';

export const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'carro', component:CarrosComponent, canActivate: [AuthGuard]},
  {path:'', redirectTo:'/usuario', pathMatch: 'full'},
  {path: '**', component:ErrorPageComponent}
];
