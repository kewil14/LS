import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findAllTypeAntecedent } from 'src/app/core/ngrx/type-antecedent/type-antecedent.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadTypeAntecedentsGuard implements CanActivate {
  constructor(
    private storeService: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.storeService.dispatch(findAllTypeAntecedent());
    return true;
  }
  
}
