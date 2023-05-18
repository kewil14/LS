import {createAction, props} from '@ngrx/store'
import { Dci } from '../../shared/models/dci.modal';

//actions for manage local data
export const setDci = createAction('[Dci] consomables/medicaments/setDci', props<{ dci: Dci}>());
export const dellDci = createAction('[Dci] consomables/medicaments/dellDci', props<{ dci: Dci }>());
export const addDci = createAction('[Dci] consomables/medicaments/addDci', props<{ dci: Dci}>());
export const loadDci = createAction('[Dci] consomables/medicaments/loadDci', props<{ dcis: Array<Dci>}>());
export const erreurDcis = createAction('[Dci] consomables/medicaments/erreurDcis', props<{messages: string[]}>());

//actions for manage api data
export const findAllDci = createAction('[Dci] consomables/medicaments/findAllDci');
export const findDciById = createAction('[Dci] consomables/medicaments/findDciById', props<{idDci: any}>());
export const updateDci = createAction('[Dci] consomables/medicaments/updateDci', props<{ dci: Dci }>());
export const createDci = createAction('[Dci] consomables/medicaments/createDci', props<{ dci: Dci }>());
export const deleteDci = createAction('[Dci] consomables/medicaments/deleteDci', props<{idDci: any}>());
