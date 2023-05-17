import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { TypeRadioService } from "../../shared/services/type-radio.service";
import { Injectable } from '@angular/core';
import { setTypeRadio, dellTypeRadio, addTypeRadio, loadTypeRadio, erreurTypeRadios,
  findAllTypeRadio, findTypeRadioById, updateTypeRadio, createTypeRadio, deleteTypeRadio
} from './type-radio.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TypeRadio } from "../../shared/models/type-radio.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class TypeRadiosEffects {

  updateTypeRadio = createEffect(() => this.actions$.pipe(
    ofType(updateTypeRadio),
    mergeMap(({typeRadio}) => this.parseSetTypeRadio(this.typeRadioService.updateTypeRadio(typeRadio)))
  ));

  addNewTypeRadio = createEffect(() => this.actions$.pipe(
    ofType(createTypeRadio),
    mergeMap(({typeRadio}) => this.parseAddTypeRadio(this.typeRadioService.createTypeRadio(typeRadio)))
  ));

  deleteTypeRadio = createEffect(() => this.actions$.pipe(
    ofType(deleteTypeRadio),
    mergeMap(({idTypeRadio}) => this.parseDeleteTypeRadio(this.typeRadioService.deleteTypeRadio(idTypeRadio)))
  ));

  findAllTypeRadio = createEffect(() => this.actions$.pipe(
    ofType(findAllTypeRadio),
    mergeMap(() => this.parseLoadTypeRadio(this.typeRadioService.findTypeRadioAll()))
  ));

  findTypeRadioById = createEffect(() => this.actions$.pipe(
    ofType(findTypeRadioById),
    mergeMap(({idTypeRadio}) => this.parseSetTypeRadio(this.typeRadioService.findTypeRadioById(idTypeRadio)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private typeRadioService: TypeRadioService)
  {}

  parseLoadTypeRadio(obs: Observable<ResponseDto<Array<TypeRadio>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<TypeRadio>>) => {
          if(data.status === 'OK'){
            return loadTypeRadio({typeRadios: data.body || []})
          } else {
            return erreurTypeRadios({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeRadios({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetTypeRadio(obs: Observable<ResponseDto<TypeRadio>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeRadio>) => {
          if(data.status === 'OK'){
            return setTypeRadio({typeRadio: data.body || {}})
          } else {
            return erreurTypeRadios({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeRadios({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddTypeRadio(obs: Observable<ResponseDto<TypeRadio>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeRadio>) => {
          if(data.status === 'OK'){
            return addTypeRadio({typeRadio: data.body || {}})
          } else {
            return erreurTypeRadios({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeRadios({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteTypeRadio(obs: Observable<ResponseDto<TypeRadio>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeRadio>) => {
          if(data.status === 'OK'){
            return dellTypeRadio({typeRadio: data.body || {}})
          } else {
            return erreurTypeRadios({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeRadios({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
