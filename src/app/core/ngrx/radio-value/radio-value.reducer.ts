import { Action, createReducer, on } from '@ngrx/store';
import { RadioValue } from "../../shared/models/radio-value.modal";
import { setRadioValue, dellRadioValue, addRadioValue, loadRadioValue, erreurRadioValues,
  findAllRadioValue, findRadioValueById, updateRadioValue, createRadioValue, deleteRadioValue,
  findRadioValueByCode, findRadioValueByIdType
} from './radio-value.actions';
import { RadioValueState } from './radio-value.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: RadioValueState = {
  radioValues: [],
  radioValue: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setRadioValue, (state, {radioValue}) => {
    let radioValues = [...state.radioValues];
    let list: Array<RadioValue> = radioValues.filter((item) => item.id != radioValue.id);
    list.push(radioValue)
    return {...state, radioValues: list, radioValue: radioValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellRadioValue, (state, {radioValue}) => {
    let radioValues = [...state.radioValues];
    let list: Array<RadioValue> = radioValues.filter((item) => item.id != radioValue.id);
    return {...state, radioValues: list, radioValue: radioValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addRadioValue, (state, {radioValue}) => {
    let radioValues = [...state.radioValues];
    radioValues.push(radioValue);
    return {...state, radioValues: radioValues, radioValue: radioValue,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadRadioValue, (state, {radioValues}) => ({...state, radioValues: radioValues, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurRadioValues, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllRadioValue, findRadioValueById, updateRadioValue,
    createRadioValue, deleteRadioValue, findRadioValueByCode, findRadioValueByIdType, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function radioValuesReducer(
  state: RadioValueState | undefined,
  action: Action
): RadioValueState {
  return reducer(state, action);
}
