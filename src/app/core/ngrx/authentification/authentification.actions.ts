import { createAction, props } from "@ngrx/store";
import { LoginDto } from "../../shared/dto/login-dto.modal";
import { ResetPasswordDto } from "../../shared/dto/reset-password-dto.modal";

export const erreursAuthentification = createAction('[Authentification] authentification/erreurs', props<{messages: string[]}>());
export const connexionOk = createAction('[Authentification] authentification/connexion-ok', props<{typeUser: any}>());
export const resetPasswordOk = createAction('[Authentification] authentification/reset-password-ok');

// emittion de l'action login d'un utilisateur
export const connexion = createAction('[Authentification] authentification/login', props<{loginDto: LoginDto}>());

//reset password
export const resetPassword = createAction('[Authentification] authentification/reset-password', props<{loginDto: LoginDto}>());

//action pour le new-password
export const resetPasswordAction = createAction('[Authentification] authentification/reset-password', props<{passwordDto:ResetPasswordDto}>());
export const resetPasswordActionOk = createAction('[Authentification] authentification/reset-password-ok');

//action pour activer le compte d'un utilisateur
export const activateAccount = createAction('[Authentification] authentification/activate-account', props<{passwordDto: ResetPasswordDto}>());
export const activateAccountOk = createAction('[Authentification] authentification/activate-account-ok');
