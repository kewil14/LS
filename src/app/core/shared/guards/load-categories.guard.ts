import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findAllCategorie } from '../../ngrx/categorie/categorie.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadCategoriesGuard implements CanActivate {
  constructor(
    private storeService: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.storeService.dispatch(findAllCategorie());
    return true;
  }
  
}
