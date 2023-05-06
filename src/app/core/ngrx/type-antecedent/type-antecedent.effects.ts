import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { TypeAntecedentService } from "../../shared/services/type-antecedent.service";
import { Injectable } from '@angular/core';
import { setTypeAntecedent, dellTypeAntecedent, addTypeAntecedent, loadTypeAntecedent, erreurTypeAntecedents,
  findAllTypeAntecedent, findTypeAntecedentById, updateTypeAntecedent, createTypeAntecedent, deleteTypeAntecedent
} from './type-antecedent.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TypeAntecedent } from "../../shared/models/type-antecedent.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class TypeAntecedentsEffects {

  updateTypeAntecedent = createEffect(() => this.actions$.pipe(
    ofType(updateTypeAntecedent),
    mergeMap(({typeAntecedent}) => this.parseSetTypeAntecedent(this.typeAntecedentService.updateTypeAntecedent(typeAntecedent)))
  ));

  addNewTypeAntecedent = createEffect(() => this.actions$.pipe(
    ofType(createTypeAntecedent),
    mergeMap(({typeAntecedent}) => this.parseAddTypeAntecedent(this.typeAntecedentService.createTypeAntecedent(typeAntecedent)))
  ));

  deleteTypeAntecedent = createEffect(() => this.actions$.pipe(
    ofType(deleteTypeAntecedent),
    mergeMap(({idTypeAntecedent}) => this.parseDeleteTypeAntecedent(this.typeAntecedentService.deleteTypeAntecedent(idTypeAntecedent)))
  ));

  findAllTypeAntecedent = createEffect(() => this.actions$.pipe(
    ofType(findAllTypeAntecedent),
    mergeMap(() => this.parseLoadTypeAntecedent(this.typeAntecedentService.findTypeAntecedentAll()))
  ));

  findTypeAntecedentById = createEffect(() => this.actions$.pipe(
    ofType(findTypeAntecedentById),
    mergeMap(({idTypeAntecedent}) => this.parseSetTypeAntecedent(this.typeAntecedentService.findTypeAntecedentById(idTypeAntecedent)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private typeAntecedentService: TypeAntecedentService)
  {}

  parseLoadTypeAntecedent(obs: Observable<ResponseDto<Array<TypeAntecedent>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<TypeAntecedent>>) => {
          if(data.status === 'OK'){
            return loadTypeAntecedent({typeAntecedents: data.body || []})
          } else {
            return erreurTypeAntecedents({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAntecedents({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetTypeAntecedent(obs: Observable<ResponseDto<TypeAntecedent>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeAntecedent>) => {
          if(data.status === 'OK'){
            return setTypeAntecedent({typeAntecedent: data.body || {}})
          } else {
            return erreurTypeAntecedents({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAntecedents({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddTypeAntecedent(obs: Observable<ResponseDto<TypeAntecedent>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeAntecedent>) => {
          if(data.status === 'OK'){
            return addTypeAntecedent({typeAntecedent: data.body || {}})
          } else {
            return erreurTypeAntecedents({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAntecedents({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteTypeAntecedent(obs: Observable<ResponseDto<TypeAntecedent>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeAntecedent>) => {
          if(data.status === 'OK'){
            return dellTypeAntecedent({typeAntecedent: data.body || {}})
          } else {
            return erreurTypeAntecedents({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAntecedents({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
