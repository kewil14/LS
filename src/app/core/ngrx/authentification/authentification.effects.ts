import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { AuthentificationDto } from "../../shared/dto/authentification-dto.modal";
import { LocalStorageService } from "../../shared/services/local-storage.service";
import { connexion, connexionOk, erreursAuthentification, resetPassword, resetPasswordOk,
} from "./authentification.actions";
import { AuthentificationService } from "../../shared/services/services-customer/authentification.service";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class AuthenticationEffects {
    
    connexion = createEffect(() => this.actions$
        .pipe(
            ofType(connexion),
            mergeMap(({loginDto}) => this.authentificationService.login(loginDto).pipe(
                map(
                    (data: AuthentificationDto) => {
                        this.localStorageService.setCurrentTokenValue(data);
                        return connexionOk();
                    }
                ),
                catchError(() => { return of(erreursAuthentification({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]}))})
                
            ))
        )
    )

    resetPassword = createEffect(() => this.actions$
        .pipe(
            ofType(resetPassword),
            mergeMap(({loginDto}) => this.authentificationService.resetPassword(loginDto).pipe(
                map(
                    () => resetPasswordOk()
                ),
                catchError(() => { return of(erreursAuthentification({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]}))})
            ))
        )
    )

    constructor(
        private authentificationService: AuthentificationService,
        private actions$: Actions,
        private localStorageService: LocalStorageService,
        private translateService: TranslateService,
    ) {}
}