import { Action, createReducer, on } from '@ngrx/store';
import { Dci } from '../../shared/models/dci.modal';
import { dellDci, addDci, loadDci, erreurDcis,
  findAllDci, findDciById, updateDci, createDci, deleteDci, setDci
} from './dci.actions';
import { DciState } from './dci.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: DciState = {
  Dcis: [],
  Dci: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setDci, (state, {Dci}) => {
    let Dcis = [...state.Dcis];
    let list: Array<Dci> = Dcis.filter((item) => item.id != Dci.id);
    list.push(Dci)
    return {...state, Dcis: list, Dci: Dci, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(dellDci, (state, {Dci}) => {
    let Dcis = [...state.Dcis];
    let list: Array<Dci> = Dcis.filter((item) => item.id != Dci.id);
    return {...state, Dcis: list, Dci: Dci, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(addDci, (state, {Dci}) => {
    let Dcis = [...state.Dcis];
    Dcis.push(Dci);
    return {...state, Dcis: Dcis, Dci: Dci, messages: []};
  }),
  on(loadDci, (state, {Dcis}) => ({...state, Dcis: Dcis, dataState: DataStateEnum.LOADED, messages: []})),
  on(erreurDcis, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllDci, findDciById, updateDci,
    createDci, deleteDci, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function DcisReducer(
  state: DciState | undefined,
  action: Action
): DciState {
  return reducer(state, action);
}
