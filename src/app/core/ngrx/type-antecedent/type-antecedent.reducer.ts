import { Action, createReducer, on } from '@ngrx/store';
import { TypeAntecedent } from "../../shared/models/type-antecedent.modal";
import { setTypeAntecedent, dellTypeAntecedent, addTypeAntecedent, loadTypeAntecedent, erreurTypeAntecedents,
  findAllTypeAntecedent, findTypeAntecedentById, updateTypeAntecedent, createTypeAntecedent, deleteTypeAntecedent
} from './type-antecedent.actions';
import { TypeAntecedentState } from './type-antecedent.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: TypeAntecedentState = {
  typeAntecedents: [],
  typeAntecedent: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setTypeAntecedent, (state, {typeAntecedent}) => {
    let typeAntecedents = [...state.typeAntecedents];
    let list: Array<TypeAntecedent> = typeAntecedents.filter((item) => item.id != typeAntecedent.id);
    list.push(typeAntecedent)
    return {...state, typeAntecedents: list, typeAntecedent: typeAntecedent, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellTypeAntecedent, (state, {typeAntecedent}) => {
    let typeAntecedents = [...state.typeAntecedents];
    let list: Array<TypeAntecedent> = typeAntecedents.filter((item) => item.id != typeAntecedent.id);
    return {...state, typeAntecedents: list, typeAntecedent: typeAntecedent, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addTypeAntecedent, (state, {typeAntecedent}) => {
    let typeAntecedents = [...state.typeAntecedents];
    typeAntecedents.push(typeAntecedent);
    return {...state, typeAntecedents: typeAntecedents, typeAntecedent: typeAntecedent,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadTypeAntecedent, (state, {typeAntecedents}) => ({...state, typeAntecedents: typeAntecedents, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurTypeAntecedents, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllTypeAntecedent, findTypeAntecedentById, updateTypeAntecedent,
    createTypeAntecedent, deleteTypeAntecedent, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function typeAntecedentsReducer(
  state: TypeAntecedentState | undefined,
  action: Action
): TypeAntecedentState {
  return reducer(state, action);
}
