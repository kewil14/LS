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
import { AntecedentValueState } from './ngrx/antecedent-value/antecedent-value.state';
import { antecedentValuesReducer } from './ngrx/antecedent-value/antecedent-value.reducer';
import { TypeAntecedentState } from './ngrx/type-antecedent/type-antecedent.state';
import { typeAntecedentsReducer } from './ngrx/type-antecedent/type-antecedent.reducer';
import { TypeIntrantState } from './ngrx/type-intrant/type-intrant.state';
import { IntrantValueState } from './ngrx/intrant-value/intrant-value.state';
import { RadioValueState } from './ngrx/radio-value/radio-value.state';
import { TypeRadioState } from './ngrx/type-radio/type-radio.state';
import { TypeLaboratoireState } from './ngrx/type-laboratoire/type-laboratoire.state';
import { LaboratoireValueState } from './ngrx/laboratoire-value/laboratoire-value.state';
import { TypeTraitmentState } from './ngrx/type-traitment/type-traitment.state';
import { TraitmentValueState } from './ngrx/traitment-value/traitment-value.state';
import { typeIntrantsReducer } from './ngrx/type-intrant/type-intrant.reducer';
import { intrantValuesReducer } from './ngrx/intrant-value/intrant-value.reducer';
import { typeRadiosReducer } from './ngrx/type-radio/type-radio.reducer';
import { radioValuesReducer } from './ngrx/radio-value/radio-value.reducer';
import { typeLaboratoiresReducer } from './ngrx/type-laboratoire/type-laboratoire.reducer';
import { laboratoireValuesReducer } from './ngrx/laboratoire-value/laboratoire-value.reducer';
import { typeTraitmentsReducer } from './ngrx/type-traitment/type-traitment.reducer';
import { traitmentValuesReducer } from './ngrx/traitment-value/traitment-value.reducer';
import { TypeAllergieState } from './ngrx/type-allergie/type-allergie.state';
import { AllergieValueState } from './ngrx/allergie-value/allergie-value.state';
import { typeAllergiesReducer } from './ngrx/type-allergie/type-allergie.reducer';
import { allergieValuesReducer } from './ngrx/allergie-value/allergie-value.reducer';

export interface AppState {
    authentificationState: AuthentificationState,
    formeState: FormeState,
    categorieState: CategorieState,
    familleState: FamilleState,
    dciState: DciState
    antecedentValue: AntecedentValueState,
    typeAntecedent: TypeAntecedentState
    typeIntrantState: TypeIntrantState,
    intrantValueState: IntrantValueState,
    typeRadioState: TypeRadioState,
    radioValueState: RadioValueState,
    typeLaboratoireState: TypeLaboratoireState,
    laboratoireValueState: LaboratoireValueState,
    typeTraitmentState: TypeTraitmentState,
    traitmentValueState: TraitmentValueState,
    typeAllergieState: TypeAllergieState,
    allergieValueState: AllergieValueState,
}

export const selectTypeIntrantState = createFeatureSelector<TypeIntrantState>('typeIntrantState');
export const selectIntrantValueState = createFeatureSelector<IntrantValueState>('intrantValueState');
export const selectTypeRadioState = createFeatureSelector<TypeRadioState>('typeRadioState');
export const selectRadioValueState = createFeatureSelector<RadioValueState>('radioValueState');
export const selectTypeLaboratoireState = createFeatureSelector<TypeLaboratoireState>('typeLaboratoireState');
export const selectLaboratoireValueState = createFeatureSelector<LaboratoireValueState>('laboratoireValueState');
export const selectTypeTraitmentState = createFeatureSelector<TypeTraitmentState>('typeTraitmentState');
export const selectTraitmentValueState = createFeatureSelector<TraitmentValueState>('traitmentValueState');

export const selectCategorieState = createFeatureSelector<CategorieState>('categorieState');
export const selectFormeState = createFeatureSelector<FormeState>('formeState');
export const selectFamilleState = createFeatureSelector<FamilleState>('familleState');
export const selectAuthentificationState = createFeatureSelector<AuthentificationState>('authentificationState');
export const selectDciState = createFeatureSelector<DciState>('dciState');

export const selectTypeAntecedentState = createFeatureSelector<TypeAntecedentState>('typeAntecedent');
export const selectAntecedentValueState = createFeatureSelector<AntecedentValueState>('antecedentValue');


export const selectTypeAllergieState = createFeatureSelector<TypeAllergieState>('typeAllergieState');
export const selectAllergieValueState = createFeatureSelector<AllergieValueState>('allergieValueState');


export const reducers: ActionReducerMap<AppState> = {
    authentificationState: AuthentificationReducer,
    formeState: formesReducer,
    categorieState:categoriesReducer,
    familleState:famillesReducer,
    dciState: DcisReducer,

    antecedentValue: antecedentValuesReducer,
    typeAntecedent: typeAntecedentsReducer,
    typeAllergieState: typeAllergiesReducer,
    allergieValueState: allergieValuesReducer,

    typeIntrantState: typeIntrantsReducer,
    intrantValueState: intrantValuesReducer,
    typeRadioState: typeRadiosReducer,
    radioValueState: radioValuesReducer,
    typeLaboratoireState: typeLaboratoiresReducer,
    laboratoireValueState: laboratoireValuesReducer,
    typeTraitmentState: typeTraitmentsReducer,
    traitmentValueState: traitmentValuesReducer
}
