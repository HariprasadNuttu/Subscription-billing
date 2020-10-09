import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isAuthenticated().then(
        (authenticated: boolean) => {
          console.log(authenticated)
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['auth/login']);
            return false;
          }
        }
      );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isAuthenticated().then(
        (authenticated: boolean) => {
          console.log(authenticated)
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['auth/login']);
            return false;
          }
        }
      );
  }
  
}
