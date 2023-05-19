import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/services-customer/user.service';
import { Store } from '@ngrx/store';
import { setProfile } from '../../ngrx/profile/profile.actions';
import { APP_LINK } from '../../config/app.url.config';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private storeService: Store
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localStorageService.isTokenExpired()) {
      this.router.navigate([APP_LINK.LINK_AUTH_LOGIN], { queryParams: { returnUrl: state.url }});
      return false;
    } else {
      //return true;
      return this.userService.findUserByToken().pipe(
        map(user => {
          if(user.id) {
            this.storeService.dispatch(setProfile({profile: user}));
            return true;
          } else {
            this.logout();
            return false;
          }
        }),
        catchError(() => {
          this.logout();
          return of(false)
        })
      );
    }
  }

  logout(): void {
    this.localStorageService.logout();
    this.router.navigate([APP_LINK.LINK_AUTH_LOGIN]);
    location.reload();
  }
  
}
