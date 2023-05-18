import { createAction, props } from "@ngrx/store";
import { LoginDto } from "../../shared/dto/login-dto.modal";

export const erreursAuthentification = createAction('[Authentification] authentification/erreurs', props<{messages: string[]}>());
export const connexionOk = createAction('[Authentification] authentification/connexion-ok');
export const resetPasswordOk = createAction('[Authentification] authentification/reset-password-ok');

// emittion de l'action login d'un utilisateur
export const connexion = createAction('[Authentification] authentification/login', props<{loginDto: LoginDto}>());

//reset password
export const resetPassword = createAction('[Authentification] authentification/reset-password', props<{loginDto: LoginDto}>());
