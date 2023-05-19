import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { Store } from '@ngrx/store';
import { InstitutionService } from '../services/services-institution/institution.service';
import { setSante } from '../../ngrx/institution/institution.actions';
import { APP_LINK } from '../../config/app.url.config';

@Injectable({
  providedIn: 'root'
})
export class AuthInstitutionGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private institutionService: InstitutionService,
    private storeService: Store
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localStorageService.isTokenExpired()) {
      this.router.navigate([APP_LINK.LINK_AUTH_LOGIN], { queryParams: { returnUrl: state.url }});
      return false;
    } else {
      // return true;
      return this.institutionService.findSanteBuToken().pipe(
        map(institution => {
          if(institution.id) {
            this.storeService.dispatch(setSante({sante: institution}));
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
