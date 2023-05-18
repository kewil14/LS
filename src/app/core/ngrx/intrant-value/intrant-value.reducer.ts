import { Action, createReducer, on } from '@ngrx/store';
import { IntrantValue } from "../../shared/models/intrant-value.modal";
import { setIntrantValue, dellIntrantValue, addIntrantValue, loadIntrantValue, erreurIntrantValues,
  findAllIntrantValue, findIntrantValueById, updateIntrantValue, createIntrantValue, deleteIntrantValue,
  findIntrantValueByCode, findIntrantValueByIdType
} from './intrant-value.actions';
import { IntrantValueState } from './intrant-value.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: IntrantValueState = {
  intrantValues: [],
  intrantValue: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setIntrantValue, (state, {intrantValue}) => {
    let intrantValues = [...state.intrantValues];
    let list: Array<IntrantValue> = intrantValues.filter((item) => item.id != intrantValue.id);
    list.push(intrantValue)
    return {...state, intrantValues: list, intrantValue: intrantValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellIntrantValue, (state, {intrantValue}) => {
    let intrantValues = [...state.intrantValues];
    let list: Array<IntrantValue> = intrantValues.filter((item) => item.id != intrantValue.id);
    return {...state, intrantValues: list, intrantValue: intrantValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addIntrantValue, (state, {intrantValue}) => {
    let intrantValues = [...state.intrantValues];
    intrantValues.push(intrantValue);
    return {...state, intrantValues: intrantValues, intrantValue: intrantValue, messages: []};
  }),
  on(loadIntrantValue, (state, {intrantValues}) => ({...state, intrantValues: intrantValues, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurIntrantValues, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllIntrantValue, findIntrantValueById, updateIntrantValue,
    createIntrantValue, deleteIntrantValue, findIntrantValueByCode, findIntrantValueByIdType, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function intrantValuesReducer(
  state: IntrantValueState | undefined,
  action: Action
): IntrantValueState {
  return reducer(state, action);
}
