import {createAction, props} from '@ngrx/store';
import { TypeAntecedent } from "../../shared/models/type-antecedent.modal";

//actions for manage local data
export const setTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/setTypeAntecedent', props<{ typeAntecedent: TypeAntecedent}>());
export const dellTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/dellTypeAntecedent', props<{ typeAntecedent: TypeAntecedent }>());
export const addTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/addTypeAntecedent', props<{ typeAntecedent: TypeAntecedent}>());
export const loadTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/loadTypeAntecedent', props<{ typeAntecedents: Array<TypeAntecedent>}>());
export const erreurTypeAntecedents = createAction('[TypeAntecedent] consomables/medicaments/erreurTypeAntecedents', props<{messages: string[]}>());

//actions for manage api data
export const findAllTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/findAllTypeAntecedent');
export const findTypeAntecedentById = createAction('[TypeAntecedent] consomables/medicaments/findTypeAntecedentById', props<{idTypeAntecedent: any}>());
export const updateTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/updateTypeAntecedent', props<{ typeAntecedent: TypeAntecedent }>());
export const createTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/createTypeAntecedent', props<{ typeAntecedent: TypeAntecedent }>());
export const deleteTypeAntecedent = createAction('[TypeAntecedent] consomables/medicaments/deleteTypeAntecedent', props<{idTypeAntecedent: any}>());
