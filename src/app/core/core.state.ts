import { Famille } from './shared/models/famille.modal';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import { AuthentificationReducer } from './ngrx/authentification/authentification.reducer';
import { AuthentificationState } from './ngrx/authentification/authentification.state';
import { FormeState } from './ngrx/forme/forme.state';
import { formesReducer } from './ngrx/forme/forme.reducer';
import { CategorieState } from './ngrx/categorie/categorie.state';
import { categoriesReducer } from './ngrx/categorie/categorie.reducer';
import { FamilleState } from './ngrx/famille/famille.state';
import { famillesReducer } from './ngrx/famille/famille.reducer';
import { DciState } from './ngrx/dci/dci.state';
import { DcisReducer } from './ngrx/dci/dci.reducer';

export interface AppState {
    authentificationState: AuthentificationState,
    formeState: FormeState,
    categorieState: CategorieState,
    familleState: FamilleState,
    dciState: DciState
}

export const selectCategorieState = createFeatureSelector<CategorieState>('categorieState');
export const selectFormeState = createFeatureSelector<FormeState>('formeState');
export const selectFamilleState = createFeatureSelector<FamilleState>('familleState');
export const selectAuthentificationState = createFeatureSelector<AuthentificationState>('authentificationState');
export const selectDciState = createFeatureSelector<DciState>('dciState');

export const reducers: ActionReducerMap<AppState> = {
    authentificationState: AuthentificationReducer,
    formeState: formesReducer,
    categorieState:categoriesReducer,
    familleState:famillesReducer,
    dciState: DcisReducer
}
