import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { AntecedentValueService } from "../../shared/services/antecedent-value.service";
import { Injectable } from '@angular/core';
import { setAntecedentValue, dellAntecedentValue, addAntecedentValue, loadAntecedentValue, erreurAntecedentValues,
  findAllAntecedentValue, findAntecedentValueById, updateAntecedentValue, createAntecedentValue, deleteAntecedentValue,
  findAntecedentValueByCode, findAntecedentValueByIdType
} from './antecedent-value.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AntecedentValue } from "../../shared/models/antecedent-value.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class AntecedentValuesEffects {

  updateAntecedentValue = createEffect(() => this.actions$.pipe(
    ofType(updateAntecedentValue),
    mergeMap(({antecedentValue}) => this.parseSetAntecedentValue(this.antecedentValueService.updateAntecedentValue(antecedentValue)))
  ));

  addNewAntecedentValue = createEffect(() => this.actions$.pipe(
    ofType(createAntecedentValue),
    mergeMap(({antecedentValue, idType}) => this.parseAddAntecedentValue(this.antecedentValueService.createAntecedentValue(antecedentValue, idType)))
  ));

  deleteAntecedentValue = createEffect(() => this.actions$.pipe(
    ofType(deleteAntecedentValue),
    mergeMap(({idAntecedentValue}) => this.parseDeleteAntecedentValue(this.antecedentValueService.deleteAntecedentValue(idAntecedentValue)))
  ));

  findAllAntecedentValue = createEffect(() => this.actions$.pipe(
    ofType(findAllAntecedentValue),
    mergeMap(() => this.parseLoadAntecedentValue(this.antecedentValueService.findAntecedentValueAll()))
  ));

  findAntecedentValueById = createEffect(() => this.actions$.pipe(
    ofType(findAntecedentValueById),
    mergeMap(({idAntecedentValue}) => this.parseSetAntecedentValue(this.antecedentValueService.findAntecedentValueById(idAntecedentValue)))
  ));

  findAntecedentValueByCode = createEffect(() => this.actions$.pipe(
    ofType(findAntecedentValueByCode),
    mergeMap(({code}) => this.parseSetAntecedentValue(this.antecedentValueService.findAntecedentValueByCode(code)))
  ));

  findAntecedentValueByIdType = createEffect(() => this.actions$.pipe(
    ofType(findAntecedentValueByIdType),
    mergeMap(({idType}) => this.parseLoadAntecedentValue(this.antecedentValueService.findAntecedentValueByIdType(idType)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private antecedentValueService: AntecedentValueService)
  {}

  parseLoadAntecedentValue(obs: Observable<ResponseDto<Array<AntecedentValue>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<AntecedentValue>>) => {
          if(data.status === 'OK'){
            return loadAntecedentValue({antecedentValues: data.body || []})
          } else {
            return erreurAntecedentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAntecedentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetAntecedentValue(obs: Observable<ResponseDto<AntecedentValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<AntecedentValue>) => {
          if(data.status === 'OK'){
            return setAntecedentValue({antecedentValue: data.body || {}})
          } else {
            return erreurAntecedentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAntecedentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddAntecedentValue(obs: Observable<ResponseDto<AntecedentValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<AntecedentValue>) => {
          if(data.status === 'OK'){
            return addAntecedentValue({antecedentValue: data.body || {}})
          } else {
            return erreurAntecedentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAntecedentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteAntecedentValue(obs: Observable<ResponseDto<AntecedentValue>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<AntecedentValue>) => {
          if(data.status === 'OK'){
            return dellAntecedentValue({antecedentValue: data.body || {}})
          } else {
            return erreurAntecedentValues({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAntecedentValues({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
