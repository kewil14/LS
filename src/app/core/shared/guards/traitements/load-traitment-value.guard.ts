import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findAllTraitmentValue } from 'src/app/core/ngrx/traitment-value/traitment-value.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadTraitmentValueGuard implements CanActivate {
  constructor(
    private storeService: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.storeService.dispatch(findAllTraitmentValue());
    return true;
  }
  
}
