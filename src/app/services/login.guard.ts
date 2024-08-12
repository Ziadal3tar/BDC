import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from './admin.service';
import { HttpErrorResponse } from '@angular/common/http';

export const loginGuard: CanActivateFn = (route, state) => {
  const login = localStorage.getItem('login');
  const router = inject(Router);

if (login == 'true') {
  return true
}else{
  router.navigate(['/home']);

  return false
}
};
