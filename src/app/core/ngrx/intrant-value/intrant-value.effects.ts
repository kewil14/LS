import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { IntrantValueService } from "../../shared/services/intrant-value.service";
import { Injectable } from '@angular/core';
import { setIntrantValue, dellIntrantValue, addIntrantValue, loadIntrantValue, erreurIntrantValues,
  findAllIntrantValue, findIntrantValueById, updateIntrantValue, createIntrantValue, deleteIntrantValue,
  findIntrantValueByCode, findIntrantValueByIdType
} from './intrant-value.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IntrantValue } from "../../shared/models/intrant-value.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class IntrantValuesEffects {

  updateIntrantValue = createEffect(() => this.actions$.pipe(
    ofType(updateIntrantValue),
    mergeMap(({intrantValue}) => this.parseSetIntrantValue(this.intrantValueService.updateIntrantValue(intrantValue)))
  ));

  addNewIntrantValue = createEffect(() => this.actions$.pipe(
    ofType(createIntrantValue),
    mergeMap(({intrantValue, idType}) => this.parseAddIntrantValue(this.intrantValueService.createIntrantValue(intrantValue, idType)))
  ));

  deleteIntrantValue = createEffect(() => this.actions$.pipe(
    ofType(deleteIntrantValue),
    mergeMap(({idIntrantValue}) => this.parseDeleteIntrantValue(this.intrantValueService.deleteIntrantValue(idIntrantValue)))
  ));

  findAllIntrantValue = createEffect(() => this.actions$.pipe(
    ofType(findAllIntrantValue),
    mergeMap(() => this.parseLoadIntrantValue(this.intrantValueService.findIntrantValueAll()))
  ));

  findIntrantValueById = createEffect(() => this.actions$.pipe(
    ofType(findIntrantValueById),
    mergeMap(({idIntrantValue}) => this.parseSetIntrantValue(this.intrantValueService.findIntrantValueById(idIntrantValue)))
  ));

  findIntrantValueByCode = createEffect(() => this.actions$.pipe(
    ofType(findIntrantValueByCode),
    mergeMap(({code}) => this.parseSetIntrantValue(this.intrantValueService.findIntrantValueByCode(code)))
  ));

  findIntrantValueByIdType = createEffect(() => this.actions$.pipe(
    ofType(findIntrantValueByIdType),
    mergeMap(({idType}) => this.parseLoadIntrantValue(this.intrantValueService.findIntrantValueByIdType(idType)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private intrantValueService: IntrantValueService)
  {}

  parseLoadIntrantValue(obs: Observable<ResponseDto<Array<IntrantValue>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<IntrantValue>>) => {
          if(data.status === 'OK'){
            return loadIntrantValue({intrantValues: data.body || []})
          } else {
            return erreurIntrantValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurIntrantValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetIntrantValue(obs: Observable<ResponseDto<IntrantValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<IntrantValue>) => {
          if(data.status === 'OK'){
            return setIntrantValue({intrantValue: data.body || {}})
          } else {
            return erreurIntrantValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurIntrantValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddIntrantValue(obs: Observable<ResponseDto<IntrantValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<IntrantValue>) => {
          if(data.status === 'OK'){
            return addIntrantValue({intrantValue: data.body || {}})
          } else {
            return erreurIntrantValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurIntrantValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteIntrantValue(obs: Observable<ResponseDto<IntrantValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<IntrantValue>) => {
          if(data.status === 'OK'){
            return dellIntrantValue({intrantValue: data.body || {}})
          } else {
            return erreurIntrantValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurIntrantValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
