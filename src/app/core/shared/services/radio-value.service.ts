import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { RadioValue } from '../models/radio-value.modal';

@Injectable({ providedIn: 'root' })
export class RadioValueService {

  constructor(private http: HttpClient) { }

  /**
   * liste des radioValue
   * @returns
   */
  findRadioValueAll(): Observable<ResponseDto<Array<RadioValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-radio`).pipe(share());
  }
  
  /**
   * findRadioValueByIdType
   * @param idType 
   * @returns Observable<ResponseDto<Array<RadioValue>>>
   */
  findRadioValueByIdType(idType: any): Observable<ResponseDto<Array<RadioValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-radio/type/${idType}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<RadioValue>>
   */
  updateRadioValue(entity: any): Observable<ResponseDto<RadioValue>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/value-radio`, entity).pipe(share());
  }

  /**
   * creer une nouvelle radioValue
   * @param entity
   * @param idType
   * @returns
   */
  createRadioValue(entity: any, idType: any): Observable<ResponseDto<RadioValue>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/value-radio/${idType}`, entity).pipe(share());
  }

  /**
   * rechercher une radioValue par son identifiant
   * @param idRadioValue
   * @returns
   */
  findRadioValueById(idRadioValue: any): Observable<ResponseDto<RadioValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-radio/${idRadioValue}`).pipe(share());
  }
  
  /**
   * findRadioValueByCode
   * @param code 
   * @returns Observable<ResponseDto<RadioValue>> 
   */
  findRadioValueByCode(code: any): Observable<ResponseDto<RadioValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-radio/code/${code}`).pipe(share());
  }
  
  /**
   * Supprimer une radioValue par son identifiant
   * @param id
   * @returns
   */
  deleteRadioValue(id: any): Observable<ResponseDto<RadioValue>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/value-radio/${id}`).pipe(share());
  }
}
