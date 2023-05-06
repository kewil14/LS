import {createAction, props} from '@ngrx/store';
import { LaboratoireValue } from "../../shared/models/laboratoire-value.modal";

//actions for manage local data
export const setLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/setLaboratoireValue', props<{ laboratoireValue: LaboratoireValue}>());
export const dellLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/dellLaboratoireValue', props<{ laboratoireValue: LaboratoireValue }>());
export const addLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/addLaboratoireValue', props<{ laboratoireValue: LaboratoireValue}>());
export const loadLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/loadLaboratoireValue', props<{ laboratoireValues: Array<LaboratoireValue>}>());
export const erreurLaboratoireValues = createAction('[LaboratoireValue] consomables/medicaments/erreurLaboratoireValues', props<{messages: string[]}>());

//actions for manage api data
export const findAllLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/findAllLaboratoireValue');
export const findLaboratoireValueById = createAction('[LaboratoireValue] consomables/medicaments/findLaboratoireValueById', props<{idLaboratoireValue: any}>());
export const updateLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/updateLaboratoireValue', props<{ laboratoireValue: LaboratoireValue }>());
export const createLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/createLaboratoireValue', props<{ laboratoireValue: LaboratoireValue, idType: any }>());
export const deleteLaboratoireValue = createAction('[LaboratoireValue] consomables/medicaments/deleteLaboratoireValue', props<{idLaboratoireValue: any}>());
export const findLaboratoireValueByCode = createAction('[LaboratoireValue] consomables/medicaments/findLaboratoireValueByCode', props<{code: any}>());
export const findLaboratoireValueByIdType = createAction('[LaboratoireValue] consomables/medicaments/findLaboratoireValueByIdType', props<{idType: any}>());
