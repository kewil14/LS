import {createAction, props} from '@ngrx/store';
import { Famille } from '../../shared/models/famille.modal';

//actions for manage local data
export const setFamille = createAction('[Famille] consomables/medicaments/setFamille', props<{ famille: Famille}>());
export const dellFamille = createAction('[Famille] consomables/medicaments/dellFamille', props<{ famille: Famille }>());
export const addFamille = createAction('[Famille] consomables/medicaments/addFamille', props<{ famille: Famille}>());
export const loadFamille = createAction('[Famille] consomables/medicaments/loadFamille', props<{ familles: Array<Famille>}>());
export const erreurFamilles = createAction('[Famille] consomables/medicaments/erreurFamilles', props<{messages: string[]}>());

//actions for manage api data
export const findAllFamille = createAction('[Famille] consomables/medicaments/findAllFamille');
export const findFamilleById = createAction('[Famille] consomables/medicaments/findFamilleById', props<{idFamille: any}>());
export const updateFamille = createAction('[Famille] consomables/medicaments/updateFamille', props<{ famille: Famille }>());
export const createFamille = createAction('[Famille] consomables/medicaments/createFamille', props<{ famille: Famille }>());
export const deleteFamille = createAction('[Famille] consomables/medicaments/deleteFamille', props<{idFamille: any}>());
