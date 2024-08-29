import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authCompanyGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const accountType = localStorage.getItem('accountType')
  if (accountType === 'E') {
    return true
  }else if (accountType === 'D') {
    router.navigate(['/app-developer/main/home']);
  }
  console.log("Route not authorized")
  return false
};
