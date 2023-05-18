import { Action, createReducer, on } from '@ngrx/store';
import { LaboratoireValue } from "../../shared/models/laboratoire-value.modal";
import { setLaboratoireValue, dellLaboratoireValue, addLaboratoireValue, loadLaboratoireValue, erreurLaboratoireValues,
  findAllLaboratoireValue, findLaboratoireValueById, updateLaboratoireValue, createLaboratoireValue, deleteLaboratoireValue,
  findLaboratoireValueByCode, findLaboratoireValueByIdType
} from './laboratoire-value.actions';
import { LaboratoireValueState } from './laboratoire-value.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: LaboratoireValueState = {
  laboratoireValues: [],
  laboratoireValue: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setLaboratoireValue, (state, {laboratoireValue}) => {
    let laboratoireValues = [...state.laboratoireValues];
    let list: Array<LaboratoireValue> = laboratoireValues.filter((item) => item.id != laboratoireValue.id);
    list.push(laboratoireValue)
    return {...state, laboratoireValues: list, laboratoireValue: laboratoireValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellLaboratoireValue, (state, {laboratoireValue}) => {
    let laboratoireValues = [...state.laboratoireValues];
    let list: Array<LaboratoireValue> = laboratoireValues.filter((item) => item.id != laboratoireValue.id);
    return {...state, laboratoireValues: list, laboratoireValue: laboratoireValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addLaboratoireValue, (state, {laboratoireValue}) => {
    let laboratoireValues = [...state.laboratoireValues];
    laboratoireValues.push(laboratoireValue);
    return {...state, laboratoireValues: laboratoireValues, laboratoireValue: laboratoireValue, messages: []};
  }),
  on(loadLaboratoireValue, (state, {laboratoireValues}) => ({...state, laboratoireValues: laboratoireValues, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurLaboratoireValues, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllLaboratoireValue, findLaboratoireValueById, updateLaboratoireValue,
    createLaboratoireValue, deleteLaboratoireValue, findLaboratoireValueByCode, findLaboratoireValueByIdType, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function laboratoireValuesReducer(
  state: LaboratoireValueState | undefined,
  action: Action
): LaboratoireValueState {
  return reducer(state, action);
}
