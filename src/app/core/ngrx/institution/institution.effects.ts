import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { setInstitution, setPharmacy, setHopital, erreurInstitutions, setSante,
  findInstitutionByToken, findHopitalByToken, findPharmacyBuToken, findSanteBuToken
} from './institution.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { InstitutionService } from '../../shared/services/services-institution/institution.service';
import { Institution } from '../../shared/models/modal-institution/institution.modal';
import { Pharmacy } from '../../shared/models/modal-institution/pharmacy.modal';
import { Hopital } from '../../shared/models/modal-institution/hopital.modal';
import { Sante } from '../../shared/models/modal-institution/sante.modal';

@Injectable()
export class InstitutionsEffects {

  findInstitutionByToken = createEffect(() => this.actions$.pipe(
    ofType(findInstitutionByToken),
    mergeMap(() => this.parseSetInstitution(this.institutionService.findInstitutionByToken()))
  ));

  findHopitalByToken = createEffect(() => this.actions$.pipe(
    ofType(findHopitalByToken),
    mergeMap(() => this.parseSetHopital(this.institutionService.findHopitalByToken()))
  ));

  findPharmacyBuToken = createEffect(() => this.actions$.pipe(
    ofType(findPharmacyBuToken),
    mergeMap(() => this.parseSetPharmacy(this.institutionService.findPharmacyBuToken()))
  ));

  findSanteBuToken = createEffect(() => this.actions$.pipe(
    ofType(findSanteBuToken),
    mergeMap(() => this.parseSetSante(this.institutionService.findSanteBuToken()))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private institutionService: InstitutionService)
  {}

  parseSetInstitution(obs: Observable<Institution>) {
    return obs.pipe(
      map(
        (data) => setInstitution({institution: data})
      ), catchError(() => of(erreurInstitutions({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetPharmacy(obs: Observable<Pharmacy>) {
    return obs.pipe(
      map(
        (data) => setPharmacy({pharmacy: data})
      ), catchError(() => of(erreurInstitutions({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetHopital(obs: Observable<Hopital>) {
    return obs.pipe(
      map(
        (data) => setHopital({hopital: data})
      ), catchError(() => of(erreurInstitutions({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetSante(obs: Observable<Sante>) {
    return obs.pipe(
      map(
        (data) => setSante({sante: data})
      ), catchError(() => of(erreurInstitutions({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
