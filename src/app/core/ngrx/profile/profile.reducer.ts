import { Action, createReducer, on } from '@ngrx/store';
import { setProfile, erreurProfiles,
  findProfileByToken,
} from './profile.actions';
import { ProfileState } from './profile.state';
import { DataStateEnum } from 'src/app/core/config/data.state.enum';

const initState: ProfileState = {
  profile: {},
  dataState: DataStateEnum.INITIAL,
  messages: []
}

const reducer = createReducer(initState,
  on(setProfile, (state, {profile}) => {
    return {...state, profile: profile, dataState: DataStateEnum.SUCCESS, messages: []}
  }),
  on(erreurProfiles, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),
  on( findProfileByToken, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
);

export function profilesReducer(
  state: ProfileState | undefined,
  action: Action
): ProfileState {
  return reducer(state, action);
}
