import {createAction, props} from '@ngrx/store';
import {Categorie} from '../../shared/models/categorie.modal';

//actions for manage local data
export const setCategorie = createAction('[Categorie] consomables/medicaments/setCategorie', props<{ categorie: Categorie}>());
export const dellCategorie = createAction('[Categorie] consomables/medicaments/dellCategorie', props<{ categorie: Categorie }>());
export const addCategorie = createAction('[Categorie] consomables/medicaments/addCategorie', props<{ categorie: Categorie}>());
export const loadCategorie = createAction('[Categorie] consomables/medicaments/loadCategorie', props<{ categories: Array<Categorie>}>());
export const erreurCategories = createAction('[Categorie] consomables/medicaments/erreurCategories', props<{messages: string[]}>());

//actions for manage api data
export const findAllCategorie = createAction('[Categorie] consomables/medicaments/findAllCategorie');
export const findCategorieById = createAction('[Categorie] consomables/medicaments/findCategorieById', props<{idCategorie: any}>());
export const updateCategorie = createAction('[Categorie] consomables/medicaments/updateCategorie', props<{ categorie: Categorie }>());
export const createCategorie = createAction('[Categorie] consomables/medicaments/createCategorie', props<{ categorie: Categorie }>());
export const deleteCategorie = createAction('[Categorie] consomables/medicaments/deleteCategorie', props<{idCategorie: any}>());
