import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { AllergieValueService } from "../../shared/services/allergie-value.service";
import { Injectable } from '@angular/core';
import { setAllergieValue, dellAllergieValue, addAllergieValue, loadAllergieValue, erreurAllergieValues,
  findAllAllergieValue, findAllergieValueById, updateAllergieValue, createAllergieValue, deleteAllergieValue,
  findAllergieValueByCode, findAllergieValueByIdType
} from './allergie-value.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AllergieValue } from "../../shared/models/allergie-value.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class AllergieValuesEffects {

  updateAllergieValue = createEffect(() => this.actions$.pipe(
    ofType(updateAllergieValue),
    mergeMap(({allergieValue}) => this.parseSetAllergieValue(this.allergieValueService.updateAllergieValue(allergieValue)))
  ));

  addNewAllergieValue = createEffect(() => this.actions$.pipe(
    ofType(createAllergieValue),
    mergeMap(({allergieValue, idType}) => this.parseAddAllergieValue(this.allergieValueService.createAllergieValue(allergieValue, idType)))
  ));

  deleteAllergieValue = createEffect(() => this.actions$.pipe(
    ofType(deleteAllergieValue),
    mergeMap(({idAllergieValue}) => this.parseDeleteAllergieValue(this.allergieValueService.deleteAllergieValue(idAllergieValue)))
  ));

  findAllAllergieValue = createEffect(() => this.actions$.pipe(
    ofType(findAllAllergieValue),
    mergeMap(() => this.parseLoadAllergieValue(this.allergieValueService.findAllergieValueAll()))
  ));

  findAllergieValueById = createEffect(() => this.actions$.pipe(
    ofType(findAllergieValueById),
    mergeMap(({idAllergieValue}) => this.parseSetAllergieValue(this.allergieValueService.findAllergieValueById(idAllergieValue)))
  ));

  findAllergieValueByCode = createEffect(() => this.actions$.pipe(
    ofType(findAllergieValueByCode),
    mergeMap(({code}) => this.parseSetAllergieValue(this.allergieValueService.findAllergieValueByCode(code)))
  ));

  findAllergieValueByIdType = createEffect(() => this.actions$.pipe(
    ofType(findAllergieValueByIdType),
    mergeMap(({idType}) => this.parseLoadAllergieValue(this.allergieValueService.findAllergieValueByIdType(idType)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private allergieValueService: AllergieValueService)
  {}

  parseLoadAllergieValue(obs: Observable<ResponseDto<Array<AllergieValue>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<AllergieValue>>) => {
          if(data.status === 'OK'){
            return loadAllergieValue({allergieValues: data.body || []})
          } else {
            return erreurAllergieValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAllergieValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetAllergieValue(obs: Observable<ResponseDto<AllergieValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<AllergieValue>) => {
          if(data.status === 'OK'){
            return setAllergieValue({allergieValue: data.body || {}})
          } else {
            return erreurAllergieValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAllergieValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddAllergieValue(obs: Observable<ResponseDto<AllergieValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<AllergieValue>) => {
          if(data.status === 'OK'){
            return addAllergieValue({allergieValue: data.body || {}})
          } else {
            return erreurAllergieValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAllergieValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteAllergieValue(obs: Observable<ResponseDto<AllergieValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<AllergieValue>) => {
          if(data.status === 'OK'){
            return dellAllergieValue({allergieValue: data.body || {}})
          } else {
            return erreurAllergieValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAllergieValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
