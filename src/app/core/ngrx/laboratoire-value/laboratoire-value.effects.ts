import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { LaboratoireValueService } from "../../shared/services/laboratoire-value.service";
import { Injectable } from '@angular/core';
import { setLaboratoireValue, dellLaboratoireValue, addLaboratoireValue, loadLaboratoireValue, erreurLaboratoireValues,
  findAllLaboratoireValue, findLaboratoireValueById, updateLaboratoireValue, createLaboratoireValue, deleteLaboratoireValue,
  findLaboratoireValueByCode, findLaboratoireValueByIdType
} from './laboratoire-value.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LaboratoireValue } from "../../shared/models/laboratoire-value.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class LaboratoireValuesEffects {

  updateLaboratoireValue = createEffect(() => this.actions$.pipe(
    ofType(updateLaboratoireValue),
    mergeMap(({laboratoireValue}) => this.parseSetLaboratoireValue(this.laboratoireValueService.updateLaboratoireValue(laboratoireValue)))
  ));

  addNewLaboratoireValue = createEffect(() => this.actions$.pipe(
    ofType(createLaboratoireValue),
    mergeMap(({laboratoireValue, idType}) => this.parseAddLaboratoireValue(this.laboratoireValueService.createLaboratoireValue(laboratoireValue, idType)))
  ));

  deleteLaboratoireValue = createEffect(() => this.actions$.pipe(
    ofType(deleteLaboratoireValue),
    mergeMap(({idLaboratoireValue}) => this.parseDeleteLaboratoireValue(this.laboratoireValueService.deleteLaboratoireValue(idLaboratoireValue)))
  ));

  findAllLaboratoireValue = createEffect(() => this.actions$.pipe(
    ofType(findAllLaboratoireValue),
    mergeMap(() => this.parseLoadLaboratoireValue(this.laboratoireValueService.findLaboratoireValueAll()))
  ));

  findLaboratoireValueById = createEffect(() => this.actions$.pipe(
    ofType(findLaboratoireValueById),
    mergeMap(({idLaboratoireValue}) => this.parseSetLaboratoireValue(this.laboratoireValueService.findLaboratoireValueById(idLaboratoireValue)))
  ));

  findLaboratoireValueByCode = createEffect(() => this.actions$.pipe(
    ofType(findLaboratoireValueByCode),
    mergeMap(({code}) => this.parseSetLaboratoireValue(this.laboratoireValueService.findLaboratoireValueByCode(code)))
  ));

  findLaboratoireValueByIdType = createEffect(() => this.actions$.pipe(
    ofType(findLaboratoireValueByIdType),
    mergeMap(({idType}) => this.parseLoadLaboratoireValue(this.laboratoireValueService.findLaboratoireValueByIdType(idType)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private laboratoireValueService: LaboratoireValueService)
  {}

  parseLoadLaboratoireValue(obs: Observable<ResponseDto<Array<LaboratoireValue>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<LaboratoireValue>>) => {
          if(data.status === 'OK'){
            return loadLaboratoireValue({laboratoireValues: data.body || []})
          } else {
            return erreurLaboratoireValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurLaboratoireValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetLaboratoireValue(obs: Observable<ResponseDto<LaboratoireValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<LaboratoireValue>) => {
          if(data.status === 'OK'){
            return setLaboratoireValue({laboratoireValue: data.body || {}})
          } else {
            return erreurLaboratoireValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurLaboratoireValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddLaboratoireValue(obs: Observable<ResponseDto<LaboratoireValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<LaboratoireValue>) => {
          if(data.status === 'OK'){
            return addLaboratoireValue({laboratoireValue: data.body || {}})
          } else {
            return erreurLaboratoireValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurLaboratoireValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteLaboratoireValue(obs: Observable<ResponseDto<LaboratoireValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<LaboratoireValue>) => {
          if(data.status === 'OK'){
            return dellLaboratoireValue({laboratoireValue: data.body || {}})
          } else {
            return erreurLaboratoireValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurLaboratoireValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
