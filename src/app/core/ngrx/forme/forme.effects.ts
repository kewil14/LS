import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { FormeService } from "../../shared/services/forme.service";
import { Injectable } from '@angular/core';
import { setForme, dellForme, addForme, loadForme, erreurFormes,
  findAllForme, findFormeById, updateForme, createForme, deleteForme
} from './forme.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Forme } from '../../shared/models/forme.modal';
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class FormesEffects {

  updateForme = createEffect(() => this.actions$.pipe(
    ofType(updateForme),
    mergeMap(({forme}) => this.parseSetForme(this.formeService.updateForme(forme)))
  ));

  addNewForme = createEffect(() => this.actions$.pipe(
    ofType(createForme),
    mergeMap(({forme}) => this.parseAddForme(this.formeService.addForme(forme)))
  ));

  deleteForme = createEffect(() => this.actions$.pipe(
    ofType(deleteForme),
    mergeMap(({idForme}) => this.parseDeleteForme(this.formeService.deleteForme(idForme)))
  ));

  findAllForme = createEffect(() => this.actions$.pipe(
    ofType(findAllForme),
    mergeMap(() => this.parseLoadForme(this.formeService.findAllForme()))
  ));

  findFormeById = createEffect(() => this.actions$.pipe(
    ofType(findFormeById),
    mergeMap(({idForme}) => this.parseSetForme(this.formeService.findFormeById(idForme)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private formeService: FormeService)
  {}

  parseLoadForme(obs: Observable<ResponseDto<Array<Forme>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Forme>>) => {
          if(data.status === 'OK'){
            return loadForme({formes: data.body || []})
          } else {
            return erreurFormes({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFormes({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetForme(obs: Observable<ResponseDto<Forme>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Forme>) => {
          if(data.status === 'OK'){
            return setForme({forme: data.body || {}})
          } else {
            return erreurFormes({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFormes({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddForme(obs: Observable<ResponseDto<Forme>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Forme>) => {
          if(data.status === 'OK'){
            return addForme({forme: data.body || {}})
          } else {
            return erreurFormes({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFormes({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteForme(obs: Observable<ResponseDto<Forme>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Forme>) => {
          if(data.status === 'OK'){
            return dellForme({forme: data.body || {}})
          } else {
            return erreurFormes({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurFormes({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
