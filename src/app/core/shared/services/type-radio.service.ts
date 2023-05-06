import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { TypeRadio } from '../models/type-radio.modal';

@Injectable({ providedIn: 'root' })
export class TypeRadioService {

  constructor(private http: HttpClient) { }

  /**
   * liste des typeRadio
   * @returns
   */
  findTypeRadioAll(): Observable<ResponseDto<Array<TypeRadio>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-radio`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<TypeRadio>>
   */
  updateTypeRadio(entity: any): Observable<ResponseDto<TypeRadio>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/type-radio`, entity).pipe(share());
  }

  /**
   * creer une nouvelle typeRadio
   * @param entity
   * @returns
   */
  createTypeRadio(entity: any): Observable<ResponseDto<TypeRadio>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/type-radio`, entity).pipe(share());
  }

  /**
   * rechercher une typeRadio par son identifiant
   * @param idTypeRadio
   * @returns
   */
  findTypeRadioById(idTypeRadio: any): Observable<ResponseDto<TypeRadio>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-radio/${idTypeRadio}`).pipe(share());
  }
  
  /**
   * Supprimer une typeRadio par son identifiant
   * @param id
   * @returns
   */
  deleteTypeRadio(id: any): Observable<ResponseDto<TypeRadio>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/type-radio/${id}`).pipe(share());
  }
}
