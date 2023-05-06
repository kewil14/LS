import {createAction, props} from '@ngrx/store';
import { TypeLaboratoire } from "../../shared/models/type-laboratoire.modal";

//actions for manage local data
export const setTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/setTypeLaboratoire', props<{ typeLaboratoire: TypeLaboratoire}>());
export const dellTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/dellTypeLaboratoire', props<{ typeLaboratoire: TypeLaboratoire }>());
export const addTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/addTypeLaboratoire', props<{ typeLaboratoire: TypeLaboratoire}>());
export const loadTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/loadTypeLaboratoire', props<{ typeLaboratoires: Array<TypeLaboratoire>}>());
export const erreurTypeLaboratoires = createAction('[TypeLaboratoire] consomables/medicaments/erreurTypeLaboratoires', props<{messages: string[]}>());

//actions for manage api data
export const findAllTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/findAllTypeLaboratoire');
export const findTypeLaboratoireById = createAction('[TypeLaboratoire] consomables/medicaments/findTypeLaboratoireById', props<{idTypeLaboratoire: any}>());
export const updateTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/updateTypeLaboratoire', props<{ typeLaboratoire: TypeLaboratoire }>());
export const createTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/createTypeLaboratoire', props<{ typeLaboratoire: TypeLaboratoire }>());
export const deleteTypeLaboratoire = createAction('[TypeLaboratoire] consomables/medicaments/deleteTypeLaboratoire', props<{idTypeLaboratoire: any}>());
