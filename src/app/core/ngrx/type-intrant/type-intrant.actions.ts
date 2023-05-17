import {createAction, props} from '@ngrx/store';
import { TypeIntrant } from "../../shared/models/type-intrant.modal";

//actions for manage local data
export const setTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/setTypeIntrant', props<{ typeIntrant: TypeIntrant}>());
export const dellTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/dellTypeIntrant', props<{ typeIntrant: TypeIntrant }>());
export const addTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/addTypeIntrant', props<{ typeIntrant: TypeIntrant}>());
export const loadTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/loadTypeIntrant', props<{ typeIntrants: Array<TypeIntrant>}>());
export const erreurTypeIntrants = createAction('[TypeIntrant] consomables/medicaments/erreurTypeIntrants', props<{messages: string[]}>());

//actions for manage api data
export const findAllTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/findAllTypeIntrant');
export const findTypeIntrantById = createAction('[TypeIntrant] consomables/medicaments/findTypeIntrantById', props<{idTypeIntrant: any}>());
export const updateTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/updateTypeIntrant', props<{ typeIntrant: TypeIntrant }>());
export const createTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/createTypeIntrant', props<{ typeIntrant: TypeIntrant }>());
export const deleteTypeIntrant = createAction('[TypeIntrant] consomables/medicaments/deleteTypeIntrant', props<{idTypeIntrant: any}>());
