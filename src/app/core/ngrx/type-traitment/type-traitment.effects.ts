import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { TypeTraitmentService } from "../../shared/services/type-traitment.service";
import { Injectable } from '@angular/core';
import { setTypeTraitment, dellTypeTraitment, addTypeTraitment, loadTypeTraitment, erreurTypeTraitments,
  findAllTypeTraitment, findTypeTraitmentById, updateTypeTraitment, createTypeTraitment, deleteTypeTraitment
} from './type-traitment.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TypeTraitment } from "../../shared/models/type-traitment.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class TypeTraitmentsEffects {

  updateTypeTraitment = createEffect(() => this.actions$.pipe(
    ofType(updateTypeTraitment),
    mergeMap(({typeTraitment}) => this.parseSetTypeTraitment(this.typeTraitmentService.updateTypeTraitment(typeTraitment)))
  ));

  addNewTypeTraitment = createEffect(() => this.actions$.pipe(
    ofType(createTypeTraitment),
    mergeMap(({typeTraitment}) => this.parseAddTypeTraitment(this.typeTraitmentService.createTypeTraitment(typeTraitment)))
  ));

  deleteTypeTraitment = createEffect(() => this.actions$.pipe(
    ofType(deleteTypeTraitment),
    mergeMap(({idTypeTraitment}) => this.parseDeleteTypeTraitment(this.typeTraitmentService.deleteTypeTraitment(idTypeTraitment)))
  ));

  findAllTypeTraitment = createEffect(() => this.actions$.pipe(
    ofType(findAllTypeTraitment),
    mergeMap(() => this.parseLoadTypeTraitment(this.typeTraitmentService.findTypeTraitmentAll()))
  ));

  findTypeTraitmentById = createEffect(() => this.actions$.pipe(
    ofType(findTypeTraitmentById),
    mergeMap(({idTypeTraitment}) => this.parseSetTypeTraitment(this.typeTraitmentService.findTypeTraitmentById(idTypeTraitment)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private typeTraitmentService: TypeTraitmentService)
  {}

  parseLoadTypeTraitment(obs: Observable<ResponseDto<Array<TypeTraitment>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<TypeTraitment>>) => {
          if(data.status === 'OK'){
            return loadTypeTraitment({typeTraitments: data.body || []})
          } else {
            return erreurTypeTraitments({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeTraitments({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetTypeTraitment(obs: Observable<ResponseDto<TypeTraitment>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeTraitment>) => {
          if(data.status === 'OK'){
            return setTypeTraitment({typeTraitment: data.body || {}})
          } else {
            return erreurTypeTraitments({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeTraitments({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddTypeTraitment(obs: Observable<ResponseDto<TypeTraitment>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeTraitment>) => {
          if(data.status === 'OK'){
            return addTypeTraitment({typeTraitment: data.body || {}})
          } else {
            return erreurTypeTraitments({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeTraitments({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteTypeTraitment(obs: Observable<ResponseDto<TypeTraitment>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeTraitment>) => {
          if(data.status === 'OK'){
            return dellTypeTraitment({typeTraitment: data.body || {}})
          } else {
            return erreurTypeTraitments({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeTraitments({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
