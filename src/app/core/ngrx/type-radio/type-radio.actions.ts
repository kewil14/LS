import {createAction, props} from '@ngrx/store';
import { TypeRadio } from "../../shared/models/type-radio.modal";

//actions for manage local data
export const setTypeRadio = createAction('[TypeRadio] consomables/medicaments/setTypeRadio', props<{ typeRadio: TypeRadio}>());
export const dellTypeRadio = createAction('[TypeRadio] consomables/medicaments/dellTypeRadio', props<{ typeRadio: TypeRadio }>());
export const addTypeRadio = createAction('[TypeRadio] consomables/medicaments/addTypeRadio', props<{ typeRadio: TypeRadio}>());
export const loadTypeRadio = createAction('[TypeRadio] consomables/medicaments/loadTypeRadio', props<{ typeRadios: Array<TypeRadio>}>());
export const erreurTypeRadios = createAction('[TypeRadio] consomables/medicaments/erreurTypeRadios', props<{messages: string[]}>());

//actions for manage api data
export const findAllTypeRadio = createAction('[TypeRadio] consomables/medicaments/findAllTypeRadio');
export const findTypeRadioById = createAction('[TypeRadio] consomables/medicaments/findTypeRadioById', props<{idTypeRadio: any}>());
export const updateTypeRadio = createAction('[TypeRadio] consomables/medicaments/updateTypeRadio', props<{ typeRadio: TypeRadio }>());
export const createTypeRadio = createAction('[TypeRadio] consomables/medicaments/createTypeRadio', props<{ typeRadio: TypeRadio }>());
export const deleteTypeRadio = createAction('[TypeRadio] consomables/medicaments/deleteTypeRadio', props<{idTypeRadio: any}>());
