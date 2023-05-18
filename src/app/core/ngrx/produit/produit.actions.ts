import {createAction, props} from '@ngrx/store';
import {Produit} from '../../shared/models/produit.modal';

//actions for manage local data
export const setProduit = createAction('[Produit] consomables/medicaments/setProduit', props<{ produit: Produit}>());
export const dellProduit = createAction('[Produit] consomables/medicaments/dellProduit', props<{ produit: Produit }>());
export const addProduit = createAction('[Produit] consomables/medicaments/addProduit', props<{ produit: Produit}>());
export const loadProduit = createAction('[Produit] consomables/medicaments/loadProduit', props<{ produits: Array<Produit>}>());
export const erreurProduits = createAction('[Produit] consomables/medicaments/erreurProduits', props<{messages: string[]}>());

//actions for manage api data
export const findAllProduit = createAction('[Produit] consomables/medicaments/findAllProduit');
export const findProduitById = createAction('[Produit] consomables/medicaments/findProduitById', props<{idProduit: any}>());
export const updateProduit = createAction('[Produit] consomables/medicaments/updateProduit', props<{ produit: Produit, idCategorie: any, idForme: any }>());
export const createProduit = createAction('[Produit] consomables/medicaments/createProduit', props<{ produit: Produit, idCategorie: any, idForme: any }>());
export const deleteProduit = createAction('[Produit] consomables/medicaments/deleteProduit', props<{ idProduit: any}>());
export const findProduitByIdCategorie = createAction('[Produit] consomables/medicaments/findProduitByIdCategorie', props<{idCategorie: any}>());
export const findProduitByIdForme = createAction('[Produit] consomables/medicaments/findProduitByIdForme', props<{idForme: any}>());
export const updateProduitPicture = createAction('[Produit] consomables/medicaments/updateProduitPicture', props<{idProduit: any, file: File}>());
