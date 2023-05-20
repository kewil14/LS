import { Action, createReducer, on } from '@ngrx/store';
import { Famille } from '../../shared/models/famille.modal';
import { setFamille, dellFamille, addFamille, loadFamille, erreurFamilles,
  findAllFamille, findFamilleById, updateFamille, createFamille, deleteFamille
} from './famille.actions';
import { FamilleState } from './famille.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: FamilleState = {
  familles: [],
  famille: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setFamille, (state, {famille}) => {
    let familles = [...state.familles];
    let list: Array<Famille> = familles.filter((item) => item.id != famille.id);
    list.push(famille)
    return {...state, familles: list, famille: famille, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellFamille, (state, {famille}) => {
    let familles = [...state.familles];
    let list: Array<Famille> = familles.filter((item) => item.id != famille.id);
    return {...state, familles: list, famille: famille, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addFamille, (state, {famille}) => {
    let familles = [...state.familles];
    familles.push(famille);
    return {...state, familles: familles, famille: famille,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadFamille, (state, {familles}) => ({...state, familles: familles, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurFamilles, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllFamille, findFamilleById, updateFamille,
    createFamille, deleteFamille, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function famillesReducer(
  state: FamilleState | undefined,
  action: Action
): FamilleState {
  return reducer(state, action);
}
