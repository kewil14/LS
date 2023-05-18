import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { setProfile, erreurProfiles,
  findProfileByToken,
} from './profile.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { UserService } from '../../shared/services/services-customer/user.service';
import { User } from '../../shared/models/modal-customer/user.modal';

@Injectable()
export class ProfilesEffects {

  findProfileByToken = createEffect(() => this.actions$.pipe(
    ofType(findProfileByToken),
    mergeMap(() => this.parseSetProfile(this.profileService.findUserByToken()))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private profileService: UserService)
  {}

  parseSetProfile(obs: Observable<User>) {
    return obs.pipe(
      map(
        (data) => setProfile({profile: data})
      ), catchError(() => of(erreurProfiles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
