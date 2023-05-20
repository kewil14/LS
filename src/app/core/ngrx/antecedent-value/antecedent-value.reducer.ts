import { Action, createReducer, on } from '@ngrx/store';
import { AntecedentValue } from "../../shared/models/antecedent-value.modal";
import { setAntecedentValue, dellAntecedentValue, addAntecedentValue, loadAntecedentValue, erreurAntecedentValues,
  findAllAntecedentValue, findAntecedentValueById, updateAntecedentValue, createAntecedentValue, deleteAntecedentValue,
  findAntecedentValueByCode, findAntecedentValueByIdType
} from './antecedent-value.actions';
import { AntecedentValueState } from './antecedent-value.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: AntecedentValueState = {
  antecedentValues: [],
  antecedentValue: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setAntecedentValue, (state, {antecedentValue}) => {
    let antecedentValues = [...state.antecedentValues];
    let list: Array<AntecedentValue> = antecedentValues.filter((item) => item.id != antecedentValue.id);
    list.push(antecedentValue)
    return {...state, antecedentValues: list, antecedentValue: antecedentValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellAntecedentValue, (state, {antecedentValue}) => {
    let antecedentValues = [...state.antecedentValues];
    let list: Array<AntecedentValue> = antecedentValues.filter((item) => item.id != antecedentValue.id);
    return {...state, antecedentValues: list, antecedentValue: antecedentValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addAntecedentValue, (state, {antecedentValue}) => {
    let antecedentValues = [...state.antecedentValues];
    antecedentValues.push(antecedentValue);
    return {...state, antecedentValues: antecedentValues, antecedentValue: antecedentValue,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadAntecedentValue, (state, {antecedentValues}) => ({...state, antecedentValues: antecedentValues, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurAntecedentValues, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllAntecedentValue, findAntecedentValueById, updateAntecedentValue,
    createAntecedentValue, deleteAntecedentValue, findAntecedentValueByCode, findAntecedentValueByIdType, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function antecedentValuesReducer(
  state: AntecedentValueState | undefined,
  action: Action
): AntecedentValueState {
  return reducer(state, action);
}
