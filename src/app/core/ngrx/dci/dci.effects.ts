import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { DciService } from "../../shared/services/dci.service";
import { Injectable } from '@angular/core';
import { setDci, dellDci, addDci, loadDci, erreurDcis,
  findAllDci, findDciById, updateDci, createDci, deleteDci
} from './dci.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';
import { Dci } from '../../shared/models/dci.modal';

@Injectable()
export class DcisEffects {

  updateDci = createEffect(() => this.actions$.pipe(
    ofType(updateDci),
    mergeMap(({dci}) => this.parseSetDci(this.DciService.updateDci(dci)))
  ));

  addNewDci = createEffect(() => this.actions$.pipe(
    ofType(createDci),
    mergeMap(({dci}) => this.parseAddDci(this.DciService.addDci(dci)))
  ));

  deleteDci = createEffect(() => this.actions$.pipe(
    ofType(deleteDci),
    mergeMap(({idDci}) => this.parseDeleteDci(this.DciService.deleteDci(idDci)))
  ));

  findAllDci = createEffect(() => this.actions$.pipe(
    ofType(findAllDci),
    mergeMap(() => this.parseLoadDci(this.DciService.findAllDci()))
  ));

  findDciById = createEffect(() => this.actions$.pipe(
    ofType(findDciById),
    mergeMap(({idDci}) => this.parseSetDci(this.DciService.findDciById(idDci)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private DciService: DciService)
  {}

  parseLoadDci(obs: Observable<ResponseDto<Array<Dci>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Dci>>) => {
          if(data.status === 'OK'){
            return loadDci({dcis: data.body || []})
          } else {
            return erreurDcis({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurDcis({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetDci(obs: Observable<ResponseDto<Dci>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Dci>) => {
          if(data.status === 'OK'){
            return setDci({dci: data.body || {}})
          } else {
            return erreurDcis({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurDcis({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddDci(obs: Observable<ResponseDto<Dci>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Dci>) => {
          if(data.status === 'OK'){
            return addDci({dci: data.body || {}})
          } else {
            return erreurDcis({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurDcis({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteDci(obs: Observable<ResponseDto<Dci>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Dci>) => {
          if(data.status === 'OK'){
            return dellDci({dci: data.body || {}})
          } else {
            return erreurDcis({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurDcis({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
