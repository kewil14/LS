import {createAction, props} from '@ngrx/store';
import { User } from '../../shared/models/modal-customer/user.modal';

//actions for manage local data
export const setUser = createAction('[User] user/setUser', props<{ user: User}>());
export const dellUser = createAction('[User] user/dellUser', props<{ user: User }>());
export const addUser = createAction('[User] user/addUser', props<{ user: User}>());
export const loadUser = createAction('[User] user/loadUser', props<{ users: Array<User>}>());
export const erreurUsers = createAction('[User] user/erreurs', props<{messages: string[]}>());

//actions for manage api data
export const findUserByToken = createAction('[User] user/findUserByToken');
export const findUserByInstitution = createAction('[User] user/findUserByInstitution user token');
