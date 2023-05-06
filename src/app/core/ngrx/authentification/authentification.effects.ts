import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { AuthentificationDto } from "../../shared/dto/authentification-dto.modal";
import { LoginDto } from "../../shared/dto/login-dto.modal";
import { ResponseDto } from "../../shared/dto/response-dto.modal";
import { User } from "../../shared/models/user.modal";
import { LocalStorageService } from "../../shared/services/local-storage.service";
import { connexion, connexionOk, erreursAuthentification, resetPassword,
    resetPasswordAction, resetPasswordActionOk, resetPasswordOk,
    activateAccount, activateAccountOk
} from "./authentification.actions";
import { AuthentificationService } from "../../shared/services/authentification.service";

@Injectable()
export class AuthenticationEffects {
    
    connexion = createEffect(() => this.actions$
        .pipe(
            ofType(connexion),
            mergeMap(({loginDto}) => this.authentificationService.login(loginDto).pipe(
                map(
                    (data: AuthentificationDto) => {
                        if(data.status == 'OK') {
                            console.log(data);
                            this.localStorageService.setCurrentTokenValue(data);
                            return connexionOk({typeUser: data.type})
                        } else {
                            return erreursAuthentification({messages: data.messages || []})
                        }
                        
                    }
                ),
                catchError(() => { return of(erreursAuthentification({messages: ['MESSGES.ERRORS.INTERNAL-ERROR']}))})
                
            ))
        )
    )

    resetPassword = createEffect(() => this.actions$
        .pipe(
            ofType(resetPassword),
            mergeMap(({loginDto}) => this.authentificationService.resetPassword(loginDto).pipe(
                map(
                    (data: ResponseDto<LoginDto>) => {
                        if(data.status == 'OK') {
                            return resetPasswordOk();
                        } else {
                            return erreursAuthentification({messages: data.messages || []})
                        }
                    }
                ),
                catchError(() => { return of(erreursAuthentification({messages: ['MESSGES.ERRORS.INTERNAL-ERROR']}))})
            ))
        )
    )

    activateAccount = createEffect(() => this.actions$
        .pipe(
            ofType(activateAccount),
            mergeMap(({passwordDto}) => this.authentificationService.activateAccount(passwordDto).pipe(
                map(
                    (data: ResponseDto<User>) => {
                        if(data.status == 'OK') {
                            return activateAccountOk();
                        } else {
                            return erreursAuthentification({messages: data.messages || []})
                        }
                    }
                ),
                catchError(() => { return of(erreursAuthentification({messages: ['MESSGES.ERRORS.INTERNAL-ERROR']}))})
            ))
        )
    )

    resetPasswordAction = createEffect(() => this.actions$
    .pipe(
        ofType(resetPasswordAction),
        mergeMap(({passwordDto}) => this.authentificationService.confirmUser(passwordDto).pipe(
            map(
                (data: ResponseDto<User>) => {
                    if(data.status == 'OK') {
                        console.log(data);
                        return resetPasswordActionOk();
                    } else {
                        return erreursAuthentification({messages: data.messages || []})
                    }
                }
            ),
            catchError(() => { return of(erreursAuthentification({messages: ['MESSGES.ERRORS.INTERNAL-ERROR']}))})
        ))
    )
    
)

    constructor(
        private authentificationService: AuthentificationService,
        private actions$: Actions,
        private localStorageService: LocalStorageService
    ) {}
}