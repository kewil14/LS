import { Action, createReducer, on } from '@ngrx/store';
import { TraitmentValue } from "../../shared/models/traitment-value.modal";
import { setTraitmentValue, dellTraitmentValue, addTraitmentValue, loadTraitmentValue, erreurTraitmentValues,
  findAllTraitmentValue, findTraitmentValueById, updateTraitmentValue, createTraitmentValue, deleteTraitmentValue,
  findTraitmentValueByCode, findTraitmentValueByIdType
} from './traitment-value.actions';
import { TraitmentValueState } from './traitment-value.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: TraitmentValueState = {
  traitmentValues: [],
  traitmentValue: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setTraitmentValue, (state, {traitmentValue}) => {
    let traitmentValues = [...state.traitmentValues];
    let list: Array<TraitmentValue> = traitmentValues.filter((item) => item.id != traitmentValue.id);
    list.push(traitmentValue)
    return {...state, traitmentValues: list, traitmentValue: traitmentValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellTraitmentValue, (state, {traitmentValue}) => {
    let traitmentValues = [...state.traitmentValues];
    let list: Array<TraitmentValue> = traitmentValues.filter((item) => item.id != traitmentValue.id);
    return {...state, traitmentValues: list, traitmentValue: traitmentValue, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addTraitmentValue, (state, {traitmentValue}) => {
    let traitmentValues = [...state.traitmentValues];
    traitmentValues.push(traitmentValue);
    return {...state, traitmentValues: traitmentValues, traitmentValue: traitmentValue, messages: []};
  }),
  on(loadTraitmentValue, (state, {traitmentValues}) => ({...state, traitmentValues: traitmentValues, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurTraitmentValues, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllTraitmentValue, findTraitmentValueById, updateTraitmentValue,
    createTraitmentValue, deleteTraitmentValue, findTraitmentValueByCode, findTraitmentValueByIdType, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function traitmentValuesReducer(
  state: TraitmentValueState | undefined,
  action: Action
): TraitmentValueState {
  return reducer(state, action);
}
