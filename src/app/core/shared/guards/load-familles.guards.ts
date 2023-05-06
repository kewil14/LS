import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findAllFamille } from '../../ngrx/famille/famille.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadFamillesGuard implements CanActivate {
  constructor(
    private storeService: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.storeService.dispatch(findAllFamille());
    return true;
  }
  
}
