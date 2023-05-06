import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { RadioValueService } from "../../shared/services/radio-value.service";
import { Injectable } from '@angular/core';
import { setRadioValue, dellRadioValue, addRadioValue, loadRadioValue, erreurRadioValues,
  findAllRadioValue, findRadioValueById, updateRadioValue, createRadioValue, deleteRadioValue,
  findRadioValueByCode, findRadioValueByIdType
} from './radio-value.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RadioValue } from "../../shared/models/radio-value.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class RadioValuesEffects {

  updateRadioValue = createEffect(() => this.actions$.pipe(
    ofType(updateRadioValue),
    mergeMap(({radioValue}) => this.parseSetRadioValue(this.radioValueService.updateRadioValue(radioValue)))
  ));

  addNewRadioValue = createEffect(() => this.actions$.pipe(
    ofType(createRadioValue),
    mergeMap(({radioValue, idType}) => this.parseAddRadioValue(this.radioValueService.createRadioValue(radioValue, idType)))
  ));

  deleteRadioValue = createEffect(() => this.actions$.pipe(
    ofType(deleteRadioValue),
    mergeMap(({idRadioValue}) => this.parseDeleteRadioValue(this.radioValueService.deleteRadioValue(idRadioValue)))
  ));

  findAllRadioValue = createEffect(() => this.actions$.pipe(
    ofType(findAllRadioValue),
    mergeMap(() => this.parseLoadRadioValue(this.radioValueService.findRadioValueAll()))
  ));

  findRadioValueById = createEffect(() => this.actions$.pipe(
    ofType(findRadioValueById),
    mergeMap(({idRadioValue}) => this.parseSetRadioValue(this.radioValueService.findRadioValueById(idRadioValue)))
  ));

  findRadioValueByCode = createEffect(() => this.actions$.pipe(
    ofType(findRadioValueByCode),
    mergeMap(({code}) => this.parseSetRadioValue(this.radioValueService.findRadioValueByCode(code)))
  ));

  findRadioValueByIdType = createEffect(() => this.actions$.pipe(
    ofType(findRadioValueByIdType),
    mergeMap(({idType}) => this.parseLoadRadioValue(this.radioValueService.findRadioValueByIdType(idType)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private radioValueService: RadioValueService)
  {}

  parseLoadRadioValue(obs: Observable<ResponseDto<Array<RadioValue>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<RadioValue>>) => {
          if(data.status === 'OK'){
            return loadRadioValue({radioValues: data.body || []})
          } else {
            return erreurRadioValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRadioValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetRadioValue(obs: Observable<ResponseDto<RadioValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<RadioValue>) => {
          if(data.status === 'OK'){
            return setRadioValue({radioValue: data.body || {}})
          } else {
            return erreurRadioValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRadioValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddRadioValue(obs: Observable<ResponseDto<RadioValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<RadioValue>) => {
          if(data.status === 'OK'){
            return addRadioValue({radioValue: data.body || {}})
          } else {
            return erreurRadioValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRadioValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteRadioValue(obs: Observable<ResponseDto<RadioValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<RadioValue>) => {
          if(data.status === 'OK'){
            return dellRadioValue({radioValue: data.body || {}})
          } else {
            return erreurRadioValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRadioValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
