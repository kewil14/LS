import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../services/local-storage.service';
import { findUserByInstitution } from '../../ngrx/user/user.actions';

@Injectable({ providedIn: 'root' })
export class LoadUserGuard implements CanActivate {
    constructor(
        private storeService: Store,
        private localStorageService: LocalStorageService,
    ) {
    }
    // tslint:disable-next-line: typedef
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(!this.localStorageService.isTokenExpired()){
        this.storeService.dispatch(findUserByInstitution());
        return true;
      } else 
        return false;
    }

}
