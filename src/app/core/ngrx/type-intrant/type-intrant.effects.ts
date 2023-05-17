import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { TypeIntrantService } from "../../shared/services/type-intrant.service";
import { Injectable } from '@angular/core';
import { setTypeIntrant, dellTypeIntrant, addTypeIntrant, loadTypeIntrant, erreurTypeIntrants,
  findAllTypeIntrant, findTypeIntrantById, updateTypeIntrant, createTypeIntrant, deleteTypeIntrant
} from './type-intrant.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TypeIntrant } from "../../shared/models/type-intrant.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class TypeIntrantsEffects {

  updateTypeIntrant = createEffect(() => this.actions$.pipe(
    ofType(updateTypeIntrant),
    mergeMap(({typeIntrant}) => this.parseSetTypeIntrant(this.typeIntrantService.updateTypeIntrant(typeIntrant)))
  ));

  addNewTypeIntrant = createEffect(() => this.actions$.pipe(
    ofType(createTypeIntrant),
    mergeMap(({typeIntrant}) => this.parseAddTypeIntrant(this.typeIntrantService.createTypeIntrant(typeIntrant)))
  ));

  deleteTypeIntrant = createEffect(() => this.actions$.pipe(
    ofType(deleteTypeIntrant),
    mergeMap(({idTypeIntrant}) => this.parseDeleteTypeIntrant(this.typeIntrantService.deleteTypeIntrant(idTypeIntrant)))
  ));

  findAllTypeIntrant = createEffect(() => this.actions$.pipe(
    ofType(findAllTypeIntrant),
    mergeMap(() => this.parseLoadTypeIntrant(this.typeIntrantService.findTypeIntrantAll()))
  ));

  findTypeIntrantById = createEffect(() => this.actions$.pipe(
    ofType(findTypeIntrantById),
    mergeMap(({idTypeIntrant}) => this.parseSetTypeIntrant(this.typeIntrantService.findTypeIntrantById(idTypeIntrant)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private typeIntrantService: TypeIntrantService)
  {}

  parseLoadTypeIntrant(obs: Observable<ResponseDto<Array<TypeIntrant>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<TypeIntrant>>) => {
          if(data.status === 'OK'){
            return loadTypeIntrant({typeIntrants: data.body || []})
          } else {
            return erreurTypeIntrants({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeIntrants({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetTypeIntrant(obs: Observable<ResponseDto<TypeIntrant>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeIntrant>) => {
          if(data.status === 'OK'){
            return setTypeIntrant({typeIntrant: data.body || {}})
          } else {
            return erreurTypeIntrants({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeIntrants({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddTypeIntrant(obs: Observable<ResponseDto<TypeIntrant>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeIntrant>) => {
          if(data.status === 'OK'){
            return addTypeIntrant({typeIntrant: data.body || {}})
          } else {
            return erreurTypeIntrants({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeIntrants({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteTypeIntrant(obs: Observable<ResponseDto<TypeIntrant>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeIntrant>) => {
          if(data.status === 'OK'){
            return dellTypeIntrant({typeIntrant: data.body || {}})
          } else {
            return erreurTypeIntrants({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeIntrants({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
