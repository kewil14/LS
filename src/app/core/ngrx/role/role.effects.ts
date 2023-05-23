import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { setRole, deleteRole, addRole, loadRole, erreurRoles, findRoleByUser,
    findAllRoles, findRoleByIdRef, findRoleByType,
    findRoleById, createRoleAdmin, updateRole, findAllAuthorities
} from './role.actions';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';
import { RoleService } from '../../shared/services/services-role/role.service';
import { Role } from '../../shared/models/modal-role/role.modal';

@Injectable()
export class RolesEffects {

  updateRole = createEffect(() => this.actions$.pipe(
    ofType(updateRole),
    mergeMap(({role}) => this.parseSetRole(this.roleService.updateRole(role)))
  ));

  createRoleAdmin = createEffect(() => this.actions$.pipe(
    ofType(createRoleAdmin),
    mergeMap(({role}) => this.parseAddRole(this.roleService.createRoleAdmin(role)))
  ));

  findAllRoles = createEffect(() => this.actions$.pipe(
    ofType(findAllRoles),
    mergeMap(() => this.parseLoadRole(this.roleService.findAllRoles()))
  ));

  findAllAuthorities = createEffect(() => this.actions$.pipe(
    ofType(findAllAuthorities),
    mergeMap(({name}) => this.parseLoadAuthorities(this.roleService.findAllAuthorities(name)))
  ));

  findRoleByIdRef = createEffect(() => this.actions$.pipe(
    ofType(findRoleByIdRef),
    mergeMap(({idRef}) => this.parseLoadRole(this.roleService.findRoleByIdRef(idRef)))
  ));

  findRoleByType = createEffect(() => this.actions$.pipe(
    ofType(findRoleByType),
    mergeMap(({typeRole}) => this.parseLoadRole(this.roleService.findRoleByType(typeRole)))
  ));

  findRoleById = createEffect(() => this.actions$.pipe(
    ofType(findRoleById),
    mergeMap(({idRole}) => this.parseSetRole(this.roleService.findRoleById(idRole)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private roleService: RoleService)
  {}

  parseLoadRole(obs: Observable<Array<Role>>) {
    return obs.pipe(
      map((data: Array<Role>) => {return loadRole({roles: data || []})}), 
      catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseLoadAuthorities(obs: Observable<Array<Role>>) {
    return obs.pipe(
      map((data: Array<Role>) => {return loadRole({roles: data || []})}), 
      catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetRole(obs: Observable<Role>) {
    return obs.pipe(
      map((data: Role) => {return setRole({role: data || {}})}), 
      catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddRole(obs: Observable<Role>) {
    return obs.pipe(
      map((data: Role) => {return addRole({role: data || {}})}), 
      catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteRole(obs: Observable<Role>) {
    return obs.pipe(
      map((data: Role) => {return deleteRole({role: data || {}})}), 
      catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
