import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import { AuthentificationReducer } from './ngrx/authentification/authentification.reducer';
import { AuthentificationState } from './ngrx/authentification/authentification.state';
import { FormeState } from './ngrx/forme/forme.state';
import { formesReducer } from './ngrx/forme/forme.reducer';

export interface AppState {
    authentificationState: AuthentificationState,
    formeState: FormeState
}

export const selectFormeState = createFeatureSelector<FormeState>('formeState');
export const selectAuthentificationState = createFeatureSelector<AuthentificationState>('authentificationState');

export const reducers: ActionReducerMap<AppState> = {
    authentificationState: AuthentificationReducer,
    formeState: formesReducer
}
