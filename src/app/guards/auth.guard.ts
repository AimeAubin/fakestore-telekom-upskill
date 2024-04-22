import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authToken = sessionStorage.getItem('auth_token');
  const router = new Router();

  if (authToken) {
    return true;
  } else {
    const redirectUrl = state.url;
    router.navigate(['/login'], { queryParams: { redirect: redirectUrl } });
    return false;
  }
};
