import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { AllergieValue } from '../models/allergie-value.modal';

@Injectable({ providedIn: 'root' })
export class AllergieValueService {

  constructor(private http: HttpClient) { }

  /**
   * liste des allergieValue
   * @returns
   */
  findAllergieValueAll(): Observable<ResponseDto<Array<AllergieValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-allergie`).pipe(share());
  }
  
  /**
   * findAllergieValueByIdType
   * @param idType 
   * @returns Observable<ResponseDto<Array<AllergieValue>>>
   */
  findAllergieValueByIdType(idType: any): Observable<ResponseDto<Array<AllergieValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-allergie/type/${idType}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<AllergieValue>>
   */
  updateAllergieValue(entity: any): Observable<ResponseDto<AllergieValue>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/value-allergie`, entity).pipe(share());
  }

  /**
   * creer une nouvelle allergieValue
   * @param entity
   * @param idType
   * @returns
   */
  createAllergieValue(entity: any, idType: any): Observable<ResponseDto<AllergieValue>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/value-allergie/${idType}`, entity).pipe(share());
  }

  /**
   * rechercher une allergieValue par son identifiant
   * @param idAllergieValue
   * @returns
   */
  findAllergieValueById(idAllergieValue: any): Observable<ResponseDto<AllergieValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-allergie/${idAllergieValue}`).pipe(share());
  }
  
  /**
   * findAllergieValueByCode
   * @param code 
   * @returns Observable<ResponseDto<AllergieValue>> 
   */
  findAllergieValueByCode(code: any): Observable<ResponseDto<AllergieValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-allergie/code/${code}`).pipe(share());
  }
  
  /**
   * Supprimer une allergieValue par son identifiant
   * @param id
   * @returns
   */
  deleteAllergieValue(id: any): Observable<ResponseDto<AllergieValue>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/value-allergie/${id}`).pipe(share());
  }
}
