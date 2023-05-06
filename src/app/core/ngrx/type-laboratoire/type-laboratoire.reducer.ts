import { Action, createReducer, on } from '@ngrx/store';
import { TypeLaboratoire } from "../../shared/models/type-laboratoire.modal";
import { setTypeLaboratoire, dellTypeLaboratoire, addTypeLaboratoire, loadTypeLaboratoire, erreurTypeLaboratoires,
  findAllTypeLaboratoire, findTypeLaboratoireById, updateTypeLaboratoire, createTypeLaboratoire, deleteTypeLaboratoire
} from './type-laboratoire.actions';
import { TypeLaboratoireState } from './type-laboratoire.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: TypeLaboratoireState = {
  typeLaboratoires: [],
  typeLaboratoire: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setTypeLaboratoire, (state, {typeLaboratoire}) => {
    let typeLaboratoires = [...state.typeLaboratoires];
    let list: Array<TypeLaboratoire> = typeLaboratoires.filter((item) => item.id != typeLaboratoire.id);
    list.push(typeLaboratoire)
    return {...state, typeLaboratoires: list, typeLaboratoire: typeLaboratoire, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(dellTypeLaboratoire, (state, {typeLaboratoire}) => {
    let typeLaboratoires = [...state.typeLaboratoires];
    let list: Array<TypeLaboratoire> = typeLaboratoires.filter((item) => item.id != typeLaboratoire.id);
    return {...state, typeLaboratoires: list, typeLaboratoire: typeLaboratoire, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(addTypeLaboratoire, (state, {typeLaboratoire}) => {
    let typeLaboratoires = [...state.typeLaboratoires];
    typeLaboratoires.push(typeLaboratoire);
    return {...state, typeLaboratoires: typeLaboratoires, typeLaboratoire: typeLaboratoire, messages: []};
  }),
  on(loadTypeLaboratoire, (state, {typeLaboratoires}) => ({...state, typeLaboratoires: typeLaboratoires, dataState: DataStateEnum.LOADED, messages: []})),
  on(erreurTypeLaboratoires, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllTypeLaboratoire, findTypeLaboratoireById, updateTypeLaboratoire,
    createTypeLaboratoire, deleteTypeLaboratoire, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function typeLaboratoiresReducer(
  state: TypeLaboratoireState | undefined,
  action: Action
): TypeLaboratoireState {
  return reducer(state, action);
}
