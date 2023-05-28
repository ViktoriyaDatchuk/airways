import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core'
import { CookieService } from 'ngx-cookie-service';

 
export const aboutGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const cookies = inject(CookieService)
    let authCookies = false
    if (cookies.get('auth')) {
        authCookies = true
    }
    return authCookies
};