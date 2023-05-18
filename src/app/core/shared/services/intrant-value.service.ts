import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { IntrantValue } from '../models/intrant-value.modal';

@Injectable({ providedIn: 'root' })
export class IntrantValueService {

  constructor(private http: HttpClient) { }

  /**
   * liste des intrantValue
   * @returns
   */
  findIntrantValueAll(): Observable<ResponseDto<Array<IntrantValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-intrant`).pipe(share());
  }
  
  /**
   * findIntrantValueByIdType
   * @param idType 
   * @returns Observable<ResponseDto<Array<IntrantValue>>>
   */
  findIntrantValueByIdType(idType: any): Observable<ResponseDto<Array<IntrantValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-intrant/type/${idType}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<IntrantValue>>
   */
  updateIntrantValue(entity: any): Observable<ResponseDto<IntrantValue>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/value-intrant`, entity).pipe(share());
  }

  /**
   * creer une nouvelle intrantValue
   * @param entity
   * @param idType
   * @returns
   */
  createIntrantValue(entity: any, idType: any): Observable<ResponseDto<IntrantValue>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/value-intrant/${idType}`, entity).pipe(share());
  }

  /**
   * rechercher une intrantValue par son identifiant
   * @param idIntrantValue
   * @returns
   */
  findIntrantValueById(idIntrantValue: any): Observable<ResponseDto<IntrantValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-intrant/${idIntrantValue}`).pipe(share());
  }
  
  /**
   * findIntrantValueByCode
   * @param code 
   * @returns Observable<ResponseDto<IntrantValue>> 
   */
  findIntrantValueByCode(code: any): Observable<ResponseDto<IntrantValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-intrant/code/${code}`).pipe(share());
  }
  
  /**
   * Supprimer une intrantValue par son identifiant
   * @param id
   * @returns
   */
  deleteIntrantValue(id: any): Observable<ResponseDto<IntrantValue>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/value-intrant/${id}`).pipe(share());
  }
}
