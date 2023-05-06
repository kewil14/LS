import {createAction, props} from '@ngrx/store';
import { TraitmentValue } from "../../shared/models/traitment-value.modal";

//actions for manage local data
export const setTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/setTraitmentValue', props<{ traitmentValue: TraitmentValue}>());
export const dellTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/dellTraitmentValue', props<{ traitmentValue: TraitmentValue }>());
export const addTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/addTraitmentValue', props<{ traitmentValue: TraitmentValue}>());
export const loadTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/loadTraitmentValue', props<{ traitmentValues: Array<TraitmentValue>}>());
export const erreurTraitmentValues = createAction('[TraitmentValue] consomables/medicaments/erreurTraitmentValues', props<{messages: string[]}>());

//actions for manage api data
export const findAllTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/findAllTraitmentValue');
export const findTraitmentValueById = createAction('[TraitmentValue] consomables/medicaments/findTraitmentValueById', props<{idTraitmentValue: any}>());
export const updateTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/updateTraitmentValue', props<{ traitmentValue: TraitmentValue }>());
export const createTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/createTraitmentValue', props<{ traitmentValue: TraitmentValue, idType: any }>());
export const deleteTraitmentValue = createAction('[TraitmentValue] consomables/medicaments/deleteTraitmentValue', props<{idTraitmentValue: any}>());
export const findTraitmentValueByCode = createAction('[TraitmentValue] consomables/medicaments/findTraitmentValueByCode', props<{code: any}>());
export const findTraitmentValueByIdType = createAction('[TraitmentValue] consomables/medicaments/findTraitmentValueByIdType', props<{idType: any}>());
