import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { FamilleService } from "../../shared/services/famille.service";
import { Injectable } from '@angular/core';
import { setFamille, dellFamille, addFamille, loadFamille, erreurFamilles,
  findAllFamille, findFamilleById, updateFamille, createFamille, deleteFamille
} from './famille.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Famille } from '../../shared/models/famille.modal';
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class FamillesEffects {

  updateFamille = createEffect(() => this.actions$.pipe(
    ofType(updateFamille),
    mergeMap(({famille}) => this.parseSetFamille(this.familleService.updateFamille(famille)))
  ));

  addNewFamille = createEffect(() => this.actions$.pipe(
    ofType(createFamille),
    mergeMap(({famille}) => this.parseAddFamille(this.familleService.addFamille(famille)))
  ));

  deleteFamille = createEffect(() => this.actions$.pipe(
    ofType(deleteFamille),
    mergeMap(({idFamille}) => this.parseDeleteFamille(this.familleService.deleteFamille(idFamille)))
  ));

  findAllFamille = createEffect(() => this.actions$.pipe(
    ofType(findAllFamille),
    mergeMap(() => this.parseLoadFamille(this.familleService.findAllFamille()))
  ));

  findFamilleById = createEffect(() => this.actions$.pipe(
    ofType(findFamilleById),
    mergeMap(({idFamille}) => this.parseSetFamille(this.familleService.findFamilleById(idFamille)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private familleService: FamilleService)
  {}

  parseLoadFamille(obs: Observable<ResponseDto<Array<Famille>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Famille>>) => {
          if(data.status === 'OK'){
            return loadFamille({familles: data.body || []})
          } else {
            return erreurFamilles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFamilles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetFamille(obs: Observable<ResponseDto<Famille>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Famille>) => {
          if(data.status === 'OK'){
            return setFamille({famille: data.body || {}})
          } else {
            return erreurFamilles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFamilles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddFamille(obs: Observable<ResponseDto<Famille>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Famille>) => {
          if(data.status === 'OK'){
            return addFamille({famille: data.body || {}})
          } else {
            return erreurFamilles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFamilles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteFamille(obs: Observable<ResponseDto<Famille>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Famille>) => {
          if(data.status === 'OK'){
            return dellFamille({famille: data.body || {}})
          } else {
            return erreurFamilles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFamilles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
