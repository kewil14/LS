import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { setUser, dellUser, addUser, loadUser, erreurUsers,
  findUserByToken, findUserByInstitution,
} from './user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { ResponseDto } from 'src/app/core/shared/dto/response-dto.modal';
import { UserService } from '../../shared/services/services-customer/user.service';
import { User } from '../../shared/models/modal-customer/user.modal';

@Injectable()
export class UsersEffects {

  findUserByInstitution = createEffect(() => this.actions$.pipe(
    ofType(findUserByInstitution),
    mergeMap(() => this.parseLoadUser(this.userService.findUserByInstitution({'size': '10000', 'page':'0'})))
  ));

  findUserByToken = createEffect(() => this.actions$.pipe(
    ofType(findUserByToken),
    mergeMap(() => this.parseSetUser(this.userService.findUserByToken()))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private userService: UserService)
  {}

  parseLoadUser(obs: Observable<Array<User>>) {
    return obs.pipe(
      map(
        (data: Array<User>) => {
          return loadUser({users: data || []})
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetUser(obs: Observable<User>) {
    return obs.pipe(
      map(
        (data: User) => {
          if(data?.id){
            return setUser({user: data || {}})
          } else {
            return erreurUsers({messages: []})
          }
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddUser(obs: Observable<ResponseDto<User>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<User>) => {
          if(data.status === 'OK'){
            return addUser({user: data.body || {}})
          } else {
            return erreurUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteUser(obs: Observable<ResponseDto<User>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<User>) => {
          if(data.status === 'OK'){
            return dellUser({user: data.body || {}})
          } else {
            return erreurUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
