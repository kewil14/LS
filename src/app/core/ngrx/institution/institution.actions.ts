import {createAction, props} from '@ngrx/store';
import { Pharmacy } from '../../shared/models/modal-institution/pharmacy.modal';
import { Hopital } from '../../shared/models/modal-institution/hopital.modal';
import { Institution } from '../../shared/models/modal-institution/institution.modal';

//actions for manage local data
export const setInstitution = createAction('[Institution] institution/institution/setInstitution', props<{ institution: Institution}>());
export const setPharmacy = createAction('[Institution] institution/pharmacy/setPharmacy', props<{ pharmacy: Pharmacy}>());
export const setHopital = createAction('[Institution] institution/hopital/setHopital', props<{ hopital: Hopital}>());
export const erreurInstitutions = createAction('[Institution] institution/erreurInstitutions', props<{messages: string[]}>());

//actions for manage api data
export const findInstitutionByToken = createAction('[Institution] institution/findInstitutionByToken');
export const findHopitalByToken = createAction('[Institution] institution/findHopitalByToken');
export const findPharmacyBuToken = createAction('[Institution] institution/findPharmacyBuToken');
