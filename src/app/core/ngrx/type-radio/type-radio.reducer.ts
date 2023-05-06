import { Action, createReducer, on } from '@ngrx/store';
import { TypeRadio } from "../../shared/models/type-radio.modal";
import { setTypeRadio, dellTypeRadio, addTypeRadio, loadTypeRadio, erreurTypeRadios,
  findAllTypeRadio, findTypeRadioById, updateTypeRadio, createTypeRadio, deleteTypeRadio
} from './type-radio.actions';
import { TypeRadioState } from './type-radio.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: TypeRadioState = {
  typeRadios: [],
  typeRadio: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setTypeRadio, (state, {typeRadio}) => {
    let typeRadios = [...state.typeRadios];
    let list: Array<TypeRadio> = typeRadios.filter((item) => item.id != typeRadio.id);
    list.push(typeRadio)
    return {...state, typeRadios: list, typeRadio: typeRadio, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(dellTypeRadio, (state, {typeRadio}) => {
    let typeRadios = [...state.typeRadios];
    let list: Array<TypeRadio> = typeRadios.filter((item) => item.id != typeRadio.id);
    return {...state, typeRadios: list, typeRadio: typeRadio, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(addTypeRadio, (state, {typeRadio}) => {
    let typeRadios = [...state.typeRadios];
    typeRadios.push(typeRadio);
    return {...state, typeRadios: typeRadios, typeRadio: typeRadio, messages: []};
  }),
  on(loadTypeRadio, (state, {typeRadios}) => ({...state, typeRadios: typeRadios, dataState: DataStateEnum.LOADED, messages: []})),
  on(erreurTypeRadios, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllTypeRadio, findTypeRadioById, updateTypeRadio,
    createTypeRadio, deleteTypeRadio, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function typeRadiosReducer(
  state: TypeRadioState | undefined,
  action: Action
): TypeRadioState {
  return reducer(state, action);
}
