import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { LaboratoireValue } from '../models/laboratoire-value.modal';

@Injectable({ providedIn: 'root' })
export class LaboratoireValueService {

  constructor(private http: HttpClient) { }

  /**
   * liste des laboratoireValue
   * @returns
   */
  findLaboratoireValueAll(): Observable<ResponseDto<Array<LaboratoireValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-laboratoire`).pipe(share());
  }
  
  /**
   * findLaboratoireValueByIdType
   * @param idType 
   * @returns Observable<ResponseDto<Array<LaboratoireValue>>>
   */
  findLaboratoireValueByIdType(idType: any): Observable<ResponseDto<Array<LaboratoireValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-laboratoire/type/${idType}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<LaboratoireValue>>
   */
  updateLaboratoireValue(entity: any): Observable<ResponseDto<LaboratoireValue>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/value-laboratoire`, entity).pipe(share());
  }

  /**
   * creer une nouvelle laboratoireValue
   * @param entity
   * @param idType
   * @returns
   */
  createLaboratoireValue(entity: any, idType: any): Observable<ResponseDto<LaboratoireValue>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/value-laboratoire/${idType}`, entity).pipe(share());
  }

  /**
   * rechercher une laboratoireValue par son identifiant
   * @param idLaboratoireValue
   * @returns
   */
  findLaboratoireValueById(idLaboratoireValue: any): Observable<ResponseDto<LaboratoireValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-laboratoire/${idLaboratoireValue}`).pipe(share());
  }
  
  /**
   * findLaboratoireValueByCode
   * @param code 
   * @returns Observable<ResponseDto<LaboratoireValue>> 
   */
  findLaboratoireValueByCode(code: any): Observable<ResponseDto<LaboratoireValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-laboratoire/code/${code}`).pipe(share());
  }
  
  /**
   * Supprimer une laboratoireValue par son identifiant
   * @param id
   * @returns
   */
  deleteLaboratoireValue(id: any): Observable<ResponseDto<LaboratoireValue>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/value-laboratoire/${id}`).pipe(share());
  }
}
