import { createAction, props } from "@ngrx/store";
import { Role } from "../../shared/models/modal-role/role.modal";

//actions for manage local data
export const erreurRoles = createAction('[Role] authentification/role/erreurs', props<{messages: string[]}>());

export const setRole = createAction('[Role] authentification/role/setRole', props<{ role: Role}>());
export const deleteRole = createAction('[Role] authentification/role/deleteRole', props<{ role: Role }>());
export const addRole = createAction('[Role] authentification/role/addRole', props<{ role: Role}>());
export const loadRole = createAction('[Role] authentification/role/loadRole', props<{ roles: Array<Role>}>());
export const loadAuthorities = createAction('[Role] authentification/role/loadAuthority', props<{ authorities: Array<Role>}>());


//Rechercher laliste des roles items
export const findAllAuthorities = createAction('[Role] uthentification/role/findAllAuthority', props<{ name: string}>())

//tous les roles d'un user
export const findRoleByUser = createAction('[Role] authentification/role/findRoleByUser', props<{idUser: any}>());

//tous les role de l'appli
export const findAllRoles = createAction('[Role] authentification/role/findAllRoles');

//tous les role de l'appli par id ref
export const findRoleByIdRef = createAction('[Role] authentification/role/findRoleByIdRef', props<{idRef: any}>());

//tous les roles par type
export const findRoleByType = createAction('[Role] authentification/role/findRoleByType', props<{typeRole: any}>());

//tous les roles par id
export const findRoleById = createAction('[Role] authentification/role/idRole', props<{idRole: any}>());

//creation role admin dans le systeme
export const createRoleAdmin = createAction('[Role] authentification/role/createRoleAdmin', props<{role: Role}>());

//mettre a jour un role dans le systeme
export const updateRole = createAction('[Role] authentification/role/updateRole', props<{role: Role}>());

