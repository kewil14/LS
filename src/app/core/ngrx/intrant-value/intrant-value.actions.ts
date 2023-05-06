import {createAction, props} from '@ngrx/store';
import { IntrantValue } from "../../shared/models/intrant-value.modal";

//actions for manage local data
export const setIntrantValue = createAction('[IntrantValue] consomables/medicaments/setIntrantValue', props<{ intrantValue: IntrantValue}>());
export const dellIntrantValue = createAction('[IntrantValue] consomables/medicaments/dellIntrantValue', props<{ intrantValue: IntrantValue }>());
export const addIntrantValue = createAction('[IntrantValue] consomables/medicaments/addIntrantValue', props<{ intrantValue: IntrantValue}>());
export const loadIntrantValue = createAction('[IntrantValue] consomables/medicaments/loadIntrantValue', props<{ intrantValues: Array<IntrantValue>}>());
export const erreurIntrantValues = createAction('[IntrantValue] consomables/medicaments/erreurIntrantValues', props<{messages: string[]}>());

//actions for manage api data
export const findAllIntrantValue = createAction('[IntrantValue] consomables/medicaments/findAllIntrantValue');
export const findIntrantValueById = createAction('[IntrantValue] consomables/medicaments/findIntrantValueById', props<{idIntrantValue: any}>());
export const updateIntrantValue = createAction('[IntrantValue] consomables/medicaments/updateIntrantValue', props<{ intrantValue: IntrantValue }>());
export const createIntrantValue = createAction('[IntrantValue] consomables/medicaments/createIntrantValue', props<{ intrantValue: IntrantValue, idType: any }>());
export const deleteIntrantValue = createAction('[IntrantValue] consomables/medicaments/deleteIntrantValue', props<{idIntrantValue: any}>());
export const findIntrantValueByCode = createAction('[IntrantValue] consomables/medicaments/findIntrantValueByCode', props<{code: any}>());
export const findIntrantValueByIdType = createAction('[IntrantValue] consomables/medicaments/findIntrantValueByIdType', props<{idType: any}>());
