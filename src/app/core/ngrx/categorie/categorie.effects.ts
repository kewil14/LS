import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { CategorieService } from "../../shared/services/categorie.service";
import { Injectable } from '@angular/core';
import { setCategorie, dellCategorie, addCategorie, loadCategorie, erreurCategories,
  findAllCategorie, findCategorieById, updateCategorie, createCategorie, deleteCategorie
} from './categorie.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Categorie } from '../../shared/models/categorie.modal';
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class CategoriesEffects {

  updateCategorie = createEffect(() => this.actions$.pipe(
    ofType(updateCategorie),
    mergeMap(({categorie}) => this.parseSetCategorie(this.categorieService.updateCategorie(categorie)))
  ));

  addNewCategorie = createEffect(() => this.actions$.pipe(
    ofType(createCategorie),
    mergeMap(({categorie}) => this.parseAddCategorie(this.categorieService.createCategorie(categorie)))
  ));

  deleteCategorie = createEffect(() => this.actions$.pipe(
    ofType(deleteCategorie),
    mergeMap(({idCategorie}) => this.parseDeleteCategorie(this.categorieService.deleteCategorie(idCategorie)))
  ));

  findAllCategorie = createEffect(() => this.actions$.pipe(
    ofType(findAllCategorie),
    mergeMap(() => this.parseLoadCategorie(this.categorieService.findAllCategorie()))
  ));

  findCategorieById = createEffect(() => this.actions$.pipe(
    ofType(findCategorieById),
    mergeMap(({idCategorie}) => this.parseSetCategorie(this.categorieService.findCategorieById(idCategorie)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private categorieService: CategorieService)
  {}

  parseLoadCategorie(obs: Observable<ResponseDto<Array<Categorie>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Categorie>>) => {
          if(data.status === 'OK'){
            return loadCategorie({categories: data.body || []})
          } else {
            return erreurCategories({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurCategories({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetCategorie(obs: Observable<ResponseDto<Categorie>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Categorie>) => {
          if(data.status === 'OK'){
            return setCategorie({categorie: data.body || {}})
          } else {
            return erreurCategories({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurCategories({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddCategorie(obs: Observable<ResponseDto<Categorie>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Categorie>) => {
          if(data.status === 'OK'){
            return addCategorie({categorie: data.body || {}})
          } else {
            return erreurCategories({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurCategories({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteCategorie(obs: Observable<ResponseDto<Categorie>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Categorie>) => {
          if(data.status === 'OK'){
            return dellCategorie({categorie: data.body || {}})
          } else {
            return erreurCategories({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurCategories({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
