import {createAction, props} from '@ngrx/store';
import { AntecedentValue } from "../../shared/models/antecedent-value.modal";

//actions for manage local data
export const setAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/setAntecedentValue', props<{ antecedentValue: AntecedentValue}>());
export const dellAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/dellAntecedentValue', props<{ antecedentValue: AntecedentValue }>());
export const addAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/addAntecedentValue', props<{ antecedentValue: AntecedentValue}>());
export const loadAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/loadAntecedentValue', props<{ antecedentValues: Array<AntecedentValue>}>());
export const erreurAntecedentValues = createAction('[AntecedentValue] consomables/medicaments/erreurAntecedentValues', props<{messages: string[]}>());

//actions for manage api data
export const findAllAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/findAllAntecedentValue');
export const findAntecedentValueById = createAction('[AntecedentValue] consomables/medicaments/findAntecedentValueById', props<{idAntecedentValue: any}>());
export const updateAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/updateAntecedentValue', props<{ antecedentValue: AntecedentValue }>());
export const createAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/createAntecedentValue', props<{ antecedentValue: AntecedentValue, idType: any }>());
export const deleteAntecedentValue = createAction('[AntecedentValue] consomables/medicaments/deleteAntecedentValue', props<{idAntecedentValue: any}>());
export const findAntecedentValueByCode = createAction('[AntecedentValue] consomables/medicaments/findAntecedentValueByCode', props<{code: any}>());
export const findAntecedentValueByIdType = createAction('[AntecedentValue] consomables/medicaments/findAntecedentValueByIdType', props<{idType: any}>());
