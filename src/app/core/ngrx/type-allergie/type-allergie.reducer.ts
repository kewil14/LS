import { Action, createReducer, on } from '@ngrx/store';
import { TypeAllergie } from "../../shared/models/type-allergie.modal";
import { setTypeAllergie, dellTypeAllergie, addTypeAllergie, loadTypeAllergie, erreurTypeAllergies,
  findAllTypeAllergie, findTypeAllergieById, updateTypeAllergie, createTypeAllergie, deleteTypeAllergie
} from './type-allergie.actions';
import { TypeAllergieState } from './type-allergie.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: TypeAllergieState = {
  typeAllergies: [],
  typeAllergie: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setTypeAllergie, (state, {typeAllergie}) => {
    let typeAllergies = [...state.typeAllergies];
    let list: Array<TypeAllergie> = typeAllergies.filter((item) => item.id != typeAllergie.id);
    list.push(typeAllergie)
    return {...state, typeAllergies: list, typeAllergie: typeAllergie, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(dellTypeAllergie, (state, {typeAllergie}) => {
    let typeAllergies = [...state.typeAllergies];
    let list: Array<TypeAllergie> = typeAllergies.filter((item) => item.id != typeAllergie.id);
    return {...state, typeAllergies: list, typeAllergie: typeAllergie, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(addTypeAllergie, (state, {typeAllergie}) => {
    let typeAllergies = [...state.typeAllergies];
    typeAllergies.push(typeAllergie);
    return {...state, typeAllergies: typeAllergies, typeAllergie: typeAllergie,dataState: DataStateEnum.SUCCESS, messages: []};
  }),
  on(loadTypeAllergie, (state, {typeAllergies}) => ({...state, typeAllergies: typeAllergies, dataState: DataStateEnum.SUCCESS, messages: []})),
  on(erreurTypeAllergies, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findAllTypeAllergie, findTypeAllergieById, updateTypeAllergie,
    createTypeAllergie, deleteTypeAllergie, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function typeAllergiesReducer(
  state: TypeAllergieState | undefined,
  action: Action
): TypeAllergieState {
  return reducer(state, action);
}
