import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../config/app.url.config';
import { Institution } from '../../models/modal-institution/institution.modal';
import { Hopital } from '../../models/modal-institution/hopital.modal';
import { Pharmacy } from '../../models/modal-institution/pharmacy.modal';

@Injectable({ providedIn: 'root' })
export class InstitutionService {

  constructor(private http: HttpClient) { }
  
  /**
   * findInstitutionByToken
   * @returns 
   */
  findInstitutionByToken(): Observable<Institution> {
    return this.http.get(API_URLS.HOSPI_CUSTOMERS_URL + `/api/institutions/my`).pipe(share());
  }
  
  /**
   * 
   * @returns 
   */
  findHopitalByToken(): Observable<Hopital> {
    return this.http.get(API_URLS.HOSPI_CUSTOMERS_URL + `/api/institution-fosas/my`).pipe(share());
  }

  /**
   * 
   * @returns 
   */
  findPharmacyBuToken(): Observable<Pharmacy> {
    return this.http.get(API_URLS.HOSPI_CUSTOMERS_URL + `/api/institution-pharma/my`).pipe(share());
  }


}
