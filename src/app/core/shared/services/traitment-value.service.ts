import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { TraitmentValue } from '../models/traitment-value.modal';

@Injectable({ providedIn: 'root' })
export class TraitmentValueService {

  constructor(private http: HttpClient) { }

  /**
   * liste des traitmentValue
   * @returns
   */
  findTraitmentValueAll(): Observable<ResponseDto<Array<TraitmentValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-traitment`).pipe(share());
  }
  
  /**
   * findTraitmentValueByIdType
   * @param idType 
   * @returns Observable<ResponseDto<Array<TraitmentValue>>>
   */
  findTraitmentValueByIdType(idType: any): Observable<ResponseDto<Array<TraitmentValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-traitment/type/${idType}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<TraitmentValue>>
   */
  updateTraitmentValue(entity: any): Observable<ResponseDto<TraitmentValue>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/value-traitment`, entity).pipe(share());
  }

  /**
   * creer une nouvelle traitmentValue
   * @param entity
   * @param idType
   * @returns
   */
  createTraitmentValue(entity: any, idType: any): Observable<ResponseDto<TraitmentValue>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/value-traitment/${idType}`, entity).pipe(share());
  }

  /**
   * rechercher une traitmentValue par son identifiant
   * @param idTraitmentValue
   * @returns
   */
  findTraitmentValueById(idTraitmentValue: any): Observable<ResponseDto<TraitmentValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-traitment/${idTraitmentValue}`).pipe(share());
  }
  
  /**
   * findTraitmentValueByCode
   * @param code 
   * @returns Observable<ResponseDto<TraitmentValue>> 
   */
  findTraitmentValueByCode(code: any): Observable<ResponseDto<TraitmentValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-traitment/code/${code}`).pipe(share());
  }
  
  /**
   * Supprimer une traitmentValue par son identifiant
   * @param id
   * @returns
   */
  deleteTraitmentValue(id: any): Observable<ResponseDto<TraitmentValue>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/value-traitment/${id}`).pipe(share());
  }
}
