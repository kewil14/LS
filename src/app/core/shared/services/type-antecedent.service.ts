import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { TypeAntecedent } from '../models/type-antecedent.modal';

@Injectable({ providedIn: 'root' })
export class TypeAntecedentService {

  constructor(private http: HttpClient) { }

  /**
   * liste des typeAntecedent
   * @returns
   */
  findTypeAntecedentAll(): Observable<ResponseDto<Array<TypeAntecedent>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-antecedent`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<TypeAntecedent>>
   */
  updateTypeAntecedent(entity: any): Observable<ResponseDto<TypeAntecedent>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/type-antecedent`, entity).pipe(share());
  }

  /**
   * creer une nouvelle typeAntecedent
   * @param entity
   * @returns
   */
  createTypeAntecedent(entity: any): Observable<ResponseDto<TypeAntecedent>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/type-antecedent`, entity).pipe(share());
  }

  /**
   * rechercher une typeAntecedent par son identifiant
   * @param idTypeAntecedent
   * @returns
   */
  findTypeAntecedentById(idTypeAntecedent: any): Observable<ResponseDto<TypeAntecedent>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-antecedent/${idTypeAntecedent}`).pipe(share());
  }
  
  /**
   * Supprimer une typeAntecedent par son identifiant
   * @param id
   * @returns
   */
  deleteTypeAntecedent(id: any): Observable<ResponseDto<TypeAntecedent>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/type-antecedent/${id}`).pipe(share());
  }
}
