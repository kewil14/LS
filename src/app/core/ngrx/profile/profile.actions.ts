import {createAction, props} from '@ngrx/store';
import { User } from '../../shared/models/modal-customer/user.modal';

//actions for manage local data
export const setProfile = createAction('[Profile] profile/setProfile', props<{ profile: User}>());
export const erreurProfiles = createAction('[Profile] profile/erreurProfiles', props<{messages: string[]}>());

//actions for manage api data
export const findProfileByToken = createAction('[Profile] profile/findProfileByToken');
