import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findAllIntrantValue } from 'src/app/core/ngrx/intrant-value/intrant-value.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadIntrantValueGuard implements CanActivate {
  constructor(
    private storeService: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.storeService.dispatch(findAllIntrantValue());
    return true;
  }
  
}
