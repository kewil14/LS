import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { findAllTypeAllergie } from '../../ngrx/type-allergie/type-allergie.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LoadAllergieTypeGuard implements CanActivate {
  constructor(
    private storeService: Store
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.storeService.dispatch(findAllTypeAllergie());
    return true;
  }
  
}
