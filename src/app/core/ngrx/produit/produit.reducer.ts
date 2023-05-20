import { Action, createReducer, on } from '@ngrx/store';
import { Produit } from '../../shared/models/produit.modal';
import { setProduit, dellProduit, addProduit, loadProduit, erreurProduits,
  findAllProduit, findProduitById, updateProduit, createProduit, deleteProduit,
  findProduitByIdCategorie, findProduitByIdForme, updateProduitPicture
} from './produit.actions';
import { ProduitState } from './produit.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: ProduitState = {
  produits: [],
  produit: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setProduit, (state, {produit}) => {
    let produits = [...state.produits];
    let list: Array<Produit> = produits.filter((item) => item.id != produit.id);
    list.push(produit)
    return {...state, produits: list, produit: produit, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellProduit, (state, {produit}) => {
    let produits = [...state.produits];
    let list: Array<Produit> = produits.filter((item) => item.id != produit.id);
    return {...state, produits: list, produit: produit, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addProduit, (state, {produit}) => {
    let produits = [...state.produits];
    produits.push(produit);
    return {...state, produits: produits, produit: produit,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadProduit, (state, {produits}) => ({...state, produits: produits, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurProduits, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllProduit, findProduitById, updateProduit, createProduit, deleteProduit,
    findProduitByIdCategorie, findProduitByIdForme, updateProduitPicture, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function produitsReducer(
  state: ProduitState | undefined,
  action: Action
): ProduitState {
  return reducer(state, action);
}
