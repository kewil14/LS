import { Action, createReducer, on } from '@ngrx/store';
import { TypeIntrant } from "../../shared/models/type-intrant.modal";
import { setTypeIntrant, dellTypeIntrant, addTypeIntrant, loadTypeIntrant, erreurTypeIntrants,
  findAllTypeIntrant, findTypeIntrantById, updateTypeIntrant, createTypeIntrant, deleteTypeIntrant
} from './type-intrant.actions';
import { TypeIntrantState } from './type-intrant.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: TypeIntrantState = {
  typeIntrants: [],
  typeIntrant: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setTypeIntrant, (state, {typeIntrant}) => {
    let typeIntrants = [...state.typeIntrants];
    let list: Array<TypeIntrant> = typeIntrants.filter((item) => item.id != typeIntrant.id);
    list.push(typeIntrant)
    return {...state, typeIntrants: list, typeIntrant: typeIntrant, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellTypeIntrant, (state, {typeIntrant}) => {
    let typeIntrants = [...state.typeIntrants];
    let list: Array<TypeIntrant> = typeIntrants.filter((item) => item.id != typeIntrant.id);
    return {...state, typeIntrants: list, typeIntrant: typeIntrant, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addTypeIntrant, (state, {typeIntrant}) => {
    let typeIntrants = [...state.typeIntrants];
    typeIntrants.push(typeIntrant);
    return {...state, typeIntrants: typeIntrants, typeIntrant: typeIntrant,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadTypeIntrant, (state, {typeIntrants}) => ({...state, typeIntrants: typeIntrants, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurTypeIntrants, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllTypeIntrant, findTypeIntrantById, updateTypeIntrant,
    createTypeIntrant, deleteTypeIntrant, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function typeIntrantsReducer(
  state: TypeIntrantState | undefined,
  action: Action
): TypeIntrantState {
  return reducer(state, action);
}
