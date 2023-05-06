import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { TypeAllergieService } from "../../shared/services/type-allergie.service";
import { Injectable } from '@angular/core';
import { setTypeAllergie, dellTypeAllergie, addTypeAllergie, loadTypeAllergie, erreurTypeAllergies,
  findAllTypeAllergie, findTypeAllergieById, updateTypeAllergie, createTypeAllergie, deleteTypeAllergie
} from './type-allergie.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TypeAllergie } from "../../shared/models/type-allergie.modal";
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class TypeAllergiesEffects {

  updateTypeAllergie = createEffect(() => this.actions$.pipe(
    ofType(updateTypeAllergie),
    mergeMap(({typeAllergie}) => this.parseSetTypeAllergie(this.typeAllergieService.updateTypeAllergie(typeAllergie)))
  ));

  addNewTypeAllergie = createEffect(() => this.actions$.pipe(
    ofType(createTypeAllergie),
    mergeMap(({typeAllergie}) => this.parseAddTypeAllergie(this.typeAllergieService.createTypeAllergie(typeAllergie)))
  ));

  deleteTypeAllergie = createEffect(() => this.actions$.pipe(
    ofType(deleteTypeAllergie),
    mergeMap(({idTypeAllergie}) => this.parseDeleteTypeAllergie(this.typeAllergieService.deleteTypeAllergie(idTypeAllergie)))
  ));

  findAllTypeAllergie = createEffect(() => this.actions$.pipe(
    ofType(findAllTypeAllergie),
    mergeMap(() => this.parseLoadTypeAllergie(this.typeAllergieService.findTypeAllergieAll()))
  ));

  findTypeAllergieById = createEffect(() => this.actions$.pipe(
    ofType(findTypeAllergieById),
    mergeMap(({idTypeAllergie}) => this.parseSetTypeAllergie(this.typeAllergieService.findTypeAllergieById(idTypeAllergie)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private typeAllergieService: TypeAllergieService)
  {}

  parseLoadTypeAllergie(obs: Observable<ResponseDto<Array<TypeAllergie>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<TypeAllergie>>) => {
          if(data.status === 'OK'){
            return loadTypeAllergie({typeAllergies: data.body || []})
          } else {
            return erreurTypeAllergies({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAllergies({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetTypeAllergie(obs: Observable<ResponseDto<TypeAllergie>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeAllergie>) => {
          if(data.status === 'OK'){
            return setTypeAllergie({typeAllergie: data.body || {}})
          } else {
            return erreurTypeAllergies({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAllergies({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddTypeAllergie(obs: Observable<ResponseDto<TypeAllergie>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeAllergie>) => {
          if(data.status === 'OK'){
            return addTypeAllergie({typeAllergie: data.body || {}})
          } else {
            return erreurTypeAllergies({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAllergies({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteTypeAllergie(obs: Observable<ResponseDto<TypeAllergie>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<TypeAllergie>) => {
          if(data.status === 'OK'){
            return dellTypeAllergie({typeAllergie: data.body || {}})
          } else {
            return erreurTypeAllergies({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurTypeAllergies({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
