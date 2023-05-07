import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findAllTypeLaboratoire } from 'src/app/core/ngrx/type-laboratoire/type-laboratoire.actions';

@Injectable({
  providedIn: 'root'
})
export class LoadTypeLaboratoireGuard implements CanActivate {
  constructor(
    private storeService: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.storeService.dispatch(findAllTypeLaboratoire());
    return true;
  }
  
}
