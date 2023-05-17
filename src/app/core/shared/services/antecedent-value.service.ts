import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { AntecedentValue } from '../models/antecedent-value.modal';

@Injectable({ providedIn: 'root' })
export class AntecedentValueService {

  constructor(private http: HttpClient) { }

  /**
   * liste des antecedentValue
   * @returns
   */
  findAntecedentValueAll(): Observable<ResponseDto<Array<AntecedentValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-antecedent`).pipe(share());
  }
  
  /**
   * findAntecedentValueByIdType
   * @param idType 
   * @returns Observable<ResponseDto<Array<AntecedentValue>>>
   */
  findAntecedentValueByIdType(idType: any): Observable<ResponseDto<Array<AntecedentValue>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-antecedent/type/${idType}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<AntecedentValue>>
   */
  updateAntecedentValue(entity: any): Observable<ResponseDto<AntecedentValue>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/value-antecedent`, entity).pipe(share());
  }

  /**
   * creer une nouvelle antecedentValue
   * @param entity
   * @param idType
   * @returns
   */
  createAntecedentValue(entity: any, idType: any): Observable<ResponseDto<AntecedentValue>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/value-antecedent/${idType}`, entity).pipe(share());
  }

  /**
   * rechercher une antecedentValue par son identifiant
   * @param idAntecedentValue
   * @returns
   */
  findAntecedentValueById(idAntecedentValue: any): Observable<ResponseDto<AntecedentValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-antecedent/${idAntecedentValue}`).pipe(share());
  }
  
  /**
   * findAntecedentValueByCode
   * @param code 
   * @returns Observable<ResponseDto<AntecedentValue>> 
   */
  findAntecedentValueByCode(code: any): Observable<ResponseDto<AntecedentValue>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/value-antecedent/code/${code}`).pipe(share());
  }
  
  /**
   * Supprimer une antecedentValue par son identifiant
   * @param id
   * @returns
   */
  deleteAntecedentValue(id: any): Observable<ResponseDto<AntecedentValue>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/value-antecedent/${id}`).pipe(share());
  }
}
