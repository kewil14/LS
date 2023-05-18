import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { TraitmentValueService } from "../../shared/services/traitment-value.service";
import { Injectable } from '@angular/core';
import { setTraitmentValue, dellTraitmentValue, addTraitmentValue, loadTraitmentValue, erreurTraitmentValues,
  findAllTraitmentValue, findTraitmentValueById, updateTraitmentValue, createTraitmentValue, deleteTraitmentValue,
  findTraitmentValueByCode, findTraitmentValueByIdType
} from './traitment-value.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TraitmentValue } from "../../shared/models/traitment-value.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class TraitmentValuesEffects {

  updateTraitmentValue = createEffect(() => this.actions$.pipe(
    ofType(updateTraitmentValue),
    mergeMap(({traitmentValue}) => this.parseSetTraitmentValue(this.traitmentValueService.updateTraitmentValue(traitmentValue)))
  ));

  addNewTraitmentValue = createEffect(() => this.actions$.pipe(
    ofType(createTraitmentValue),
    mergeMap(({traitmentValue, idType}) => this.parseAddTraitmentValue(this.traitmentValueService.createTraitmentValue(traitmentValue, idType)))
  ));

  deleteTraitmentValue = createEffect(() => this.actions$.pipe(
    ofType(deleteTraitmentValue),
    mergeMap(({idTraitmentValue}) => this.parseDeleteTraitmentValue(this.traitmentValueService.deleteTraitmentValue(idTraitmentValue)))
  ));

  findAllTraitmentValue = createEffect(() => this.actions$.pipe(
    ofType(findAllTraitmentValue),
    mergeMap(() => this.parseLoadTraitmentValue(this.traitmentValueService.findTraitmentValueAll()))
  ));

  findTraitmentValueById = createEffect(() => this.actions$.pipe(
    ofType(findTraitmentValueById),
    mergeMap(({idTraitmentValue}) => this.parseSetTraitmentValue(this.traitmentValueService.findTraitmentValueById(idTraitmentValue)))
  ));

  findTraitmentValueByCode = createEffect(() => this.actions$.pipe(
    ofType(findTraitmentValueByCode),
    mergeMap(({code}) => this.parseSetTraitmentValue(this.traitmentValueService.findTraitmentValueByCode(code)))
  ));

  findTraitmentValueByIdType = createEffect(() => this.actions$.pipe(
    ofType(findTraitmentValueByIdType),
    mergeMap(({idType}) => this.parseLoadTraitmentValue(this.traitmentValueService.findTraitmentValueByIdType(idType)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private traitmentValueService: TraitmentValueService)
  {}

  parseLoadTraitmentValue(obs: Observable<ResponseDto<Array<TraitmentValue>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<TraitmentValue>>) => {
          if(data.status === 'OK'){
            return loadTraitmentValue({traitmentValues: data.body || []})
          } else {
            return erreurTraitmentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTraitmentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetTraitmentValue(obs: Observable<ResponseDto<TraitmentValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TraitmentValue>) => {
          if(data.status === 'OK'){
            return setTraitmentValue({traitmentValue: data.body || {}})
          } else {
            return erreurTraitmentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTraitmentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddTraitmentValue(obs: Observable<ResponseDto<TraitmentValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TraitmentValue>) => {
          if(data.status === 'OK'){
            return addTraitmentValue({traitmentValue: data.body || {}})
          } else {
            return erreurTraitmentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTraitmentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteTraitmentValue(obs: Observable<ResponseDto<TraitmentValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TraitmentValue>) => {
          if(data.status === 'OK'){
            return dellTraitmentValue({traitmentValue: data.body || {}})
          } else {
            return erreurTraitmentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTraitmentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
