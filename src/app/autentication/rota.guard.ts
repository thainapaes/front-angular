import { CanActivateFn, Router } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {

  /*const rota = new Router;
  if(localStorage.getItem('auth-token"') !== '') {
    return true;
  } else {
    rota.navigateByUrl('/usuario');
    return false;
  }*/

  return true;
};
