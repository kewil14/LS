import { Action, createReducer, on } from '@ngrx/store';
import { setInstitution, setPharmacy, setHopital, erreurInstitutions,
  findInstitutionByToken, findHopitalByToken, findPharmacyBuToken
} from './institution.actions';
import { InstitutionState } from './institution.state';
import { DataStateEnum } from 'src/app/core/config/data.state.enum';

const initState: InstitutionState = {
  institution: {},
  pharmacy: {},
  hopital: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setInstitution, (state, {institution}) => {
    return {...state, institution: institution, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(setPharmacy, (state, {pharmacy}) => {
    return {...state, pharmacy: pharmacy, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(setHopital, (state, {hopital}) => {
    return {...state, hopital: hopital, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(erreurInstitutions, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findInstitutionByToken, findHopitalByToken, findPharmacyBuToken, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function institutionsReducer(
  state: InstitutionState | undefined,
  action: Action
): InstitutionState {
  return reducer(state, action);
}
