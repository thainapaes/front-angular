import { Routes } from '@angular/router';
import { CarrosComponentsComponent } from './carros/carros.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { rotaGuard } from './autentication/rota.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'carro', component:CarrosComponentsComponent, canActivate:[rotaGuard]},
  {path:'', redirectTo:'/usuario', pathMatch: 'full'},
  {path: '**', component:ErrorPageComponent}
];
