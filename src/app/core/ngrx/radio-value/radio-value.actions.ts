import {createAction, props} from '@ngrx/store';
import { RadioValue } from "../../shared/models/radio-value.modal";

//actions for manage local data
export const setRadioValue = createAction('[RadioValue] consomables/medicaments/setRadioValue', props<{ radioValue: RadioValue}>());
export const dellRadioValue = createAction('[RadioValue] consomables/medicaments/dellRadioValue', props<{ radioValue: RadioValue }>());
export const addRadioValue = createAction('[RadioValue] consomables/medicaments/addRadioValue', props<{ radioValue: RadioValue}>());
export const loadRadioValue = createAction('[RadioValue] consomables/medicaments/loadRadioValue', props<{ radioValues: Array<RadioValue>}>());
export const erreurRadioValues = createAction('[RadioValue] consomables/medicaments/erreurRadioValues', props<{messages: string[]}>());

//actions for manage api data
export const findAllRadioValue = createAction('[RadioValue] consomables/medicaments/findAllRadioValue');
export const findRadioValueById = createAction('[RadioValue] consomables/medicaments/findRadioValueById', props<{idRadioValue: any}>());
export const updateRadioValue = createAction('[RadioValue] consomables/medicaments/updateRadioValue', props<{ radioValue: RadioValue }>());
export const createRadioValue = createAction('[RadioValue] consomables/medicaments/createRadioValue', props<{ radioValue: RadioValue, idType: any }>());
export const deleteRadioValue = createAction('[RadioValue] consomables/medicaments/deleteRadioValue', props<{idRadioValue: any}>());
export const findRadioValueByCode = createAction('[RadioValue] consomables/medicaments/findRadioValueByCode', props<{code: any}>());
export const findRadioValueByIdType = createAction('[RadioValue] consomables/medicaments/findRadioValueByIdType', props<{idType: any}>());
