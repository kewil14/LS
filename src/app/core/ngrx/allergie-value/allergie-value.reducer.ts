import { Action, createReducer, on } from '@ngrx/store';
import { AllergieValue } from "../../shared/models/allergie-value.modal";
import { setAllergieValue, dellAllergieValue, addAllergieValue, loadAllergieValue, erreurAllergieValues,
  findAllAllergieValue, findAllergieValueById, updateAllergieValue, createAllergieValue, deleteAllergieValue,
  findAllergieValueByCode, findAllergieValueByIdType
} from './allergie-value.actions';
import { AllergieValueState } from './allergie-value.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: AllergieValueState = {
  allergieValues: [],
  allergieValue: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setAllergieValue, (state, {allergieValue}) => {
    let allergieValues = [...state.allergieValues];
    let list: Array<AllergieValue> = allergieValues.filter((item) => item.id != allergieValue.id);
    list.push(allergieValue)
    return {...state, allergieValues: list, allergieValue: allergieValue, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(dellAllergieValue, (state, {allergieValue}) => {
    let allergieValues = [...state.allergieValues];
    let list: Array<AllergieValue> = allergieValues.filter((item) => item.id != allergieValue.id);
    return {...state, allergieValues: list, allergieValue: allergieValue, dataState: DataStateEnum.LOADED, messages: []}
  }),
  on(addAllergieValue, (state, {allergieValue}) => {
    let allergieValues = [...state.allergieValues];
    allergieValues.push(allergieValue);
    return {...state, allergieValues: allergieValues, allergieValue: allergieValue, messages: []};
  }),
  on(loadAllergieValue, (state, {allergieValues}) => ({...state, allergieValues: allergieValues, dataState: DataStateEnum.LOADED, messages: []})),
  on(erreurAllergieValues, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllAllergieValue, findAllergieValueById, updateAllergieValue,
    createAllergieValue, deleteAllergieValue, findAllergieValueByCode, findAllergieValueByIdType, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function allergieValuesReducer(
  state: AllergieValueState | undefined,
  action: Action
): AllergieValueState {
  return reducer(state, action);
}
