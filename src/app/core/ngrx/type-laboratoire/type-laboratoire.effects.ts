import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { TypeLaboratoireService } from "../../shared/services/type-laboratoire.service";
import { Injectable } from '@angular/core';
import { setTypeLaboratoire, dellTypeLaboratoire, addTypeLaboratoire, loadTypeLaboratoire, erreurTypeLaboratoires,
  findAllTypeLaboratoire, findTypeLaboratoireById, updateTypeLaboratoire, createTypeLaboratoire, deleteTypeLaboratoire
} from './type-laboratoire.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TypeLaboratoire } from "../../shared/models/type-laboratoire.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class TypeLaboratoiresEffects {

  updateTypeLaboratoire = createEffect(() => this.actions$.pipe(
    ofType(updateTypeLaboratoire),
    mergeMap(({typeLaboratoire}) => this.parseSetTypeLaboratoire(this.typeLaboratoireService.updateTypeLaboratoire(typeLaboratoire)))
  ));

  addNewTypeLaboratoire = createEffect(() => this.actions$.pipe(
    ofType(createTypeLaboratoire),
    mergeMap(({typeLaboratoire}) => this.parseAddTypeLaboratoire(this.typeLaboratoireService.createTypeLaboratoire(typeLaboratoire)))
  ));

  deleteTypeLaboratoire = createEffect(() => this.actions$.pipe(
    ofType(deleteTypeLaboratoire),
    mergeMap(({idTypeLaboratoire}) => this.parseDeleteTypeLaboratoire(this.typeLaboratoireService.deleteTypeLaboratoire(idTypeLaboratoire)))
  ));

  findAllTypeLaboratoire = createEffect(() => this.actions$.pipe(
    ofType(findAllTypeLaboratoire),
    mergeMap(() => this.parseLoadTypeLaboratoire(this.typeLaboratoireService.findTypeLaboratoireAll()))
  ));

  findTypeLaboratoireById = createEffect(() => this.actions$.pipe(
    ofType(findTypeLaboratoireById),
    mergeMap(({idTypeLaboratoire}) => this.parseSetTypeLaboratoire(this.typeLaboratoireService.findTypeLaboratoireById(idTypeLaboratoire)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private typeLaboratoireService: TypeLaboratoireService)
  {}

  parseLoadTypeLaboratoire(obs: Observable<ResponseDto<Array<TypeLaboratoire>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<TypeLaboratoire>>) => {
          if(data.status === 'OK'){
            return loadTypeLaboratoire({typeLaboratoires: data.body || []})
          } else {
            return erreurTypeLaboratoires({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeLaboratoires({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetTypeLaboratoire(obs: Observable<ResponseDto<TypeLaboratoire>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeLaboratoire>) => {
          if(data.status === 'OK'){
            return setTypeLaboratoire({typeLaboratoire: data.body || {}})
          } else {
            return erreurTypeLaboratoires({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeLaboratoires({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddTypeLaboratoire(obs: Observable<ResponseDto<TypeLaboratoire>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeLaboratoire>) => {
          if(data.status === 'OK'){
            return addTypeLaboratoire({typeLaboratoire: data.body || {}})
          } else {
            return erreurTypeLaboratoires({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeLaboratoires({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteTypeLaboratoire(obs: Observable<ResponseDto<TypeLaboratoire>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeLaboratoire>) => {
          if(data.status === 'OK'){
            return dellTypeLaboratoire({typeLaboratoire: data.body || {}})
          } else {
            return erreurTypeLaboratoires({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeLaboratoires({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
