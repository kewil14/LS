import {createAction, props} from '@ngrx/store';
import {Forme} from '../../shared/models/forme.modal';

//actions for manage local data
export const setForme = createAction('[Forme] consomables/medicaments/setForme', props<{ forme: Forme}>());
export const dellForme = createAction('[Forme] consomables/medicaments/dellForme', props<{ forme: Forme }>());
export const addForme = createAction('[Forme] consomables/medicaments/addForme', props<{ forme: Forme}>());
export const loadForme = createAction('[Forme] consomables/medicaments/loadForme', props<{ formes: Array<Forme>}>());
export const erreurFormes = createAction('[Forme] consomables/medicaments/erreurFormes', props<{messages: string[]}>());

//actions for manage api data
export const findAllForme = createAction('[Forme] consomables/medicaments/findAllForme');
export const findFormeById = createAction('[Forme] consomables/medicaments/findFormeById', props<{idForme: any}>());
export const updateForme = createAction('[Forme] consomables/medicaments/updateForme', props<{ forme: Forme }>());
export const createForme = createAction('[Forme] consomables/medicaments/createForme', props<{ forme: Forme }>());
export const deleteForme = createAction('[Forme] consomables/medicaments/deleteForme', props<{idForme: any}>());
