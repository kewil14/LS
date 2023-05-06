import {createAction, props} from '@ngrx/store';
import { TypeTraitment } from "../../shared/models/type-traitment.modal";

//actions for manage local data
export const setTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/setTypeTraitment', props<{ typeTraitment: TypeTraitment}>());
export const dellTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/dellTypeTraitment', props<{ typeTraitment: TypeTraitment }>());
export const addTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/addTypeTraitment', props<{ typeTraitment: TypeTraitment}>());
export const loadTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/loadTypeTraitment', props<{ typeTraitments: Array<TypeTraitment>}>());
export const erreurTypeTraitments = createAction('[TypeTraitment] consomables/medicaments/erreurTypeTraitments', props<{messages: string[]}>());

//actions for manage api data
export const findAllTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/findAllTypeTraitment');
export const findTypeTraitmentById = createAction('[TypeTraitment] consomables/medicaments/findTypeTraitmentById', props<{idTypeTraitment: any}>());
export const updateTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/updateTypeTraitment', props<{ typeTraitment: TypeTraitment }>());
export const createTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/createTypeTraitment', props<{ typeTraitment: TypeTraitment }>());
export const deleteTypeTraitment = createAction('[TypeTraitment] consomables/medicaments/deleteTypeTraitment', props<{idTypeTraitment: any}>());
