import { Action, createReducer, on } from '@ngrx/store';
import { TypeTraitment } from "../../shared/models/type-traitment.modal";
import { setTypeTraitment, dellTypeTraitment, addTypeTraitment, loadTypeTraitment, erreurTypeTraitments,
  findAllTypeTraitment, findTypeTraitmentById, updateTypeTraitment, createTypeTraitment, deleteTypeTraitment
} from './type-traitment.actions';
import { TypeTraitmentState } from './type-traitment.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: TypeTraitmentState = {
  typeTraitments: [],
  typeTraitment: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setTypeTraitment, (state, {typeTraitment}) => {
    let typeTraitments = [...state.typeTraitments];
    let list: Array<TypeTraitment> = typeTraitments.filter((item) => item.id != typeTraitment.id);
    list.push(typeTraitment)
    return {...state, typeTraitments: list, typeTraitment: typeTraitment, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellTypeTraitment, (state, {typeTraitment}) => {
    let typeTraitments = [...state.typeTraitments];
    let list: Array<TypeTraitment> = typeTraitments.filter((item) => item.id != typeTraitment.id);
    return {...state, typeTraitments: list, typeTraitment: typeTraitment, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addTypeTraitment, (state, {typeTraitment}) => {
    let typeTraitments = [...state.typeTraitments];
    typeTraitments.push(typeTraitment);
    return {...state, typeTraitments: typeTraitments, typeTraitment: typeTraitment,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadTypeTraitment, (state, {typeTraitments}) => ({...state, typeTraitments: typeTraitments, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurTypeTraitments, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllTypeTraitment, findTypeTraitmentById, updateTypeTraitment,
    createTypeTraitment, deleteTypeTraitment, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function typeTraitmentsReducer(
  state: TypeTraitmentState | undefined,
  action: Action
): TypeTraitmentState {
  return reducer(state, action);
}
