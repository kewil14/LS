import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { ProduitService } from "../../shared/services/produit.service";
import { Injectable } from '@angular/core';
import { setProduit, dellProduit, addProduit, loadProduit, erreurProduits,
  findAllProduit, findProduitById, updateProduit, createProduit, deleteProduit,
  findProduitByIdCategorie, findProduitByIdForme, updateProduitPicture
} from './produit.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Produit } from '../../shared/models/produit.modal';
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';

@Injectable()
export class ProduitsEffects {

  updateProduit = createEffect(() => this.actions$.pipe(
    ofType(updateProduit),
    mergeMap(({produit, idCategorie, idForme}) => this.parseSetProduit(this.produitService.updateProduit(produit, idCategorie, idForme)))
  ));

  addNewProduit = createEffect(() => this.actions$.pipe(
    ofType(createProduit),
    mergeMap(({produit,idCategorie, idForme}) => this.parseAddProduit(this.produitService.addProduit(produit, idCategorie, idForme)))
  ));

  deleteProduit = createEffect(() => this.actions$.pipe(
    ofType(deleteProduit),
    mergeMap(({idProduit}) => this.parseDeleteProduit(this.produitService.deleteProduit(idProduit)))
  ));

  findAllProduit = createEffect(() => this.actions$.pipe(
    ofType(findAllProduit),
    mergeMap(() => this.parseLoadProduit(this.produitService.findAllProduit()))
  ));

  findProduitById = createEffect(() => this.actions$.pipe(
    ofType(findProduitById),
    mergeMap(({idProduit}) => this.parseSetProduit(this.produitService.findProduitById(idProduit)))
  ));

  findProduitByIdCategorie = createEffect(() => this.actions$.pipe(
    ofType(findProduitByIdCategorie),
    mergeMap(({idCategorie}) => this.parseLoadProduit(this.produitService.findProduitByIdCategorie(idCategorie)))
  ));

  findProduitByIdForme = createEffect(() => this.actions$.pipe(
    ofType(findProduitByIdForme),
    mergeMap(({idForme}) => this.parseLoadProduit(this.produitService.findProduitByIdForme(idForme)))
  ));

  updateProduitPicture = createEffect(() => this.actions$.pipe(
    ofType(updateProduitPicture),
    mergeMap(({idProduit, file}) => {
      const formdata = new FormData();
      formdata.append('file', file);
      return this.parseSetProduit(this.produitService.updateProduitPicture(idProduit, formdata))
    })
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private produitService: ProduitService)
  {}

  parseLoadProduit(obs: Observable<ResponseDto<Array<Produit>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Produit>>) => {
          if(data.status === 'OK'){
            return loadProduit({produits: data.body || []})
          } else {
            return erreurProduits({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProduits({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetProduit(obs: Observable<ResponseDto<Produit>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Produit>) => {
          if(data.status === 'OK'){
            return setProduit({produit: data.body || {}})
          } else {
            return erreurProduits({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProduits({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddProduit(obs: Observable<ResponseDto<Produit>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Produit>) => {
          if(data.status === 'OK'){
            return addProduit({produit: data.body || {}})
          } else {
            return erreurProduits({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProduits({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteProduit(obs: Observable<ResponseDto<Produit>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Produit>) => {
          if(data.status === 'OK'){
            return dellProduit({produit: data.body || {}})
          } else {
            return erreurProduits({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProduits({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
