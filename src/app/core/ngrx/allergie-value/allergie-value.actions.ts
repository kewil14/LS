import {createAction, props} from '@ngrx/store';
import { AllergieValue } from "../../shared/models/allergie-value.modal";

//actions for manage local data
export const setAllergieValue = createAction('[AllergieValue] consomables/medicaments/setAllergieValue', props<{ allergieValue: AllergieValue}>());
export const dellAllergieValue = createAction('[AllergieValue] consomables/medicaments/dellAllergieValue', props<{ allergieValue: AllergieValue }>());
export const addAllergieValue = createAction('[AllergieValue] consomables/medicaments/addAllergieValue', props<{ allergieValue: AllergieValue}>());
export const loadAllergieValue = createAction('[AllergieValue] consomables/medicaments/loadAllergieValue', props<{ allergieValues: Array<AllergieValue>}>());
export const erreurAllergieValues = createAction('[AllergieValue] consomables/medicaments/erreurAllergieValues', props<{messages: string[]}>());

//actions for manage api data
export const findAllAllergieValue = createAction('[AllergieValue] consomables/medicaments/findAllAllergieValue');
export const findAllergieValueById = createAction('[AllergieValue] consomables/medicaments/findAllergieValueById', props<{idAllergieValue: any}>());
export const updateAllergieValue = createAction('[AllergieValue] consomables/medicaments/updateAllergieValue', props<{ allergieValue: AllergieValue }>());
export const createAllergieValue = createAction('[AllergieValue] consomables/medicaments/createAllergieValue', props<{ allergieValue: AllergieValue, idType: any }>());
export const deleteAllergieValue = createAction('[AllergieValue] consomables/medicaments/deleteAllergieValue', props<{idAllergieValue: any}>());
export const findAllergieValueByCode = createAction('[AllergieValue] consomables/medicaments/findAllergieValueByCode', props<{code: any}>());
export const findAllergieValueByIdType = createAction('[AllergieValue] consomables/medicaments/findAllergieValueByIdType', props<{idType: any}>());
