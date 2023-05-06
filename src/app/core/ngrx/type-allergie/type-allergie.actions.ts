import {createAction, props} from '@ngrx/store';
import { TypeAllergie } from "../../shared/models/type-allergie.modal";

//actions for manage local data
export const setTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/setTypeAllergie', props<{ typeAllergie: TypeAllergie}>());
export const dellTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/dellTypeAllergie', props<{ typeAllergie: TypeAllergie }>());
export const addTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/addTypeAllergie', props<{ typeAllergie: TypeAllergie}>());
export const loadTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/loadTypeAllergie', props<{ typeAllergies: Array<TypeAllergie>}>());
export const erreurTypeAllergies = createAction('[TypeAllergie] consomables/medicaments/erreurTypeAllergies', props<{messages: string[]}>());

//actions for manage api data
export const findAllTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/findAllTypeAllergie');
export const findTypeAllergieById = createAction('[TypeAllergie] consomables/medicaments/findTypeAllergieById', props<{idTypeAllergie: any}>());
export const updateTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/updateTypeAllergie', props<{ typeAllergie: TypeAllergie }>());
export const createTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/createTypeAllergie', props<{ typeAllergie: TypeAllergie }>());
export const deleteTypeAllergie = createAction('[TypeAllergie] consomables/medicaments/deleteTypeAllergie', props<{idTypeAllergie: any}>());
