import { Action, createReducer, on } from '@ngrx/store';
import { Forme } from '../../shared/models/forme.modal';
import { setForme, dellForme, addForme, loadForme, erreurFormes,
  findAllForme, findFormeById, updateForme, createForme, deleteForme
} from './forme.actions';
import { FormeState } from './forme.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: FormeState = {
  formes: [],
  forme: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setForme, (state, {forme}) => {
    let formes = [...state.formes];
    let list: Array<Forme> = formes.filter((item) => item.id != forme.id);
    list.push(forme)
    return {...state, formes: list, forme: forme, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(dellForme, (state, {forme}) => {
    let formes = [...state.formes];
    let list: Array<Forme> = formes.filter((item) => item.id != forme.id);
    return {...state, formes: list, forme: forme, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(addForme, (state, {forme}) => {
    let formes = [...state.formes];
    formes.push(forme);
    return {...state, formes: formes, forme: forme, messages: []};
  }),
  on(loadForme, (state, {formes}) => ({...state, formes: formes, dataState: DataStateEnum.LOADED, messages: []})),
  on(erreurFormes, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllForme, findFormeById, updateForme,
    createForme, deleteForme, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function formesReducer(
  state: FormeState | undefined,
  action: Action
): FormeState {
  return reducer(state, action);
}
