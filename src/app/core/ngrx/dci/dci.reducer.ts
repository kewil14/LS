import { Action, createReducer, on } from '@ngrx/store';
import { Dci } from '../../shared/models/dci.modal';
import { dellDci, addDci, loadDci, erreurDcis,
  findAllDci, findDciById, updateDci, createDci, deleteDci, setDci
} from './dci.actions';
import { DciState } from './dci.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: DciState = {
  dcis: [],
  dci: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setDci, (state, {dci}) => {
    let dcis = [...state.dcis];
    let list: Array<Dci> = dcis.filter((item) => item.id != dci.id);
    list.push(dci)
    return {...state, dcis: list, dci: dci, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellDci, (state, {dci}) => {
    let dcis = [...state.dcis];
    let list: Array<Dci> = dcis.filter((item) => item.id != dci.id);
    return {...state, dcis: list, dci: dci, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addDci, (state, {dci}) => {
    let dcis = [...state.dcis];
    dcis.push(dci);
    return {...state, dcis: dcis, dci: dci, messages: []};
  }),
  on(loadDci, (state, {dcis}) => ({...state, dcis: dcis, dataState: DataStateEnum.SUCCESS, messages: []})),
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
