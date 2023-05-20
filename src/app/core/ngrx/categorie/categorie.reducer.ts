import { Action, createReducer, on } from '@ngrx/store';
import { Categorie } from '../../shared/models/categorie.modal';
import { setCategorie, dellCategorie, addCategorie, loadCategorie, erreurCategories,
  findAllCategorie, findCategorieById, updateCategorie, createCategorie, deleteCategorie
} from './categorie.actions';
import { CategorieState } from './categorie.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: CategorieState = {
  categories: [],
  categorie: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setCategorie, (state, {categorie}) => {
    let categories = [...state.categories];
    let list: Array<Categorie> = categories.filter((item) => item.id != categorie.id);
    list.push(categorie)
    return {...state, categories: list, categorie: categorie, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellCategorie, (state, {categorie}) => {
    let categories = [...state.categories];
    let list: Array<Categorie> = categories.filter((item) => item.id != categorie.id);
    return {...state, categories: list, categorie: categorie, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addCategorie, (state, {categorie}) => {
    let categories = [...state.categories];
    categories.push(categorie);
    return {...state, categories: categories, categorie: categorie,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadCategorie, (state, {categories}) => ({...state, categories: categories, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurCategories, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllCategorie, findCategorieById, updateCategorie,
    createCategorie, deleteCategorie, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function categoriesReducer(
  state: CategorieState | undefined,
  action: Action
): CategorieState {
  return reducer(state, action);
}
