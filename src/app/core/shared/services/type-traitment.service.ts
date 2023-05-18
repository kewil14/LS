import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { TypeTraitment } from '../models/type-traitment.modal';

@Injectable({ providedIn: 'root' })
export class TypeTraitmentService {

  constructor(private http: HttpClient) { }

  /**
   * liste des typeTraitment
   * @returns
   */
  findTypeTraitmentAll(): Observable<ResponseDto<Array<TypeTraitment>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-traitment`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<TypeTraitment>>
   */
  updateTypeTraitment(entity: any): Observable<ResponseDto<TypeTraitment>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/type-traitment`, entity).pipe(share());
  }

  /**
   * creer une nouvelle typeTraitment
   * @param entity
   * @returns
   */
  createTypeTraitment(entity: any): Observable<ResponseDto<TypeTraitment>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/type-traitment`, entity).pipe(share());
  }

  /**
   * rechercher une typeTraitment par son identifiant
   * @param idTypeTraitment
   * @returns
   */
  findTypeTraitmentById(idTypeTraitment: any): Observable<ResponseDto<TypeTraitment>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-traitment/${idTypeTraitment}`).pipe(share());
  }
  
  /**
   * Supprimer une typeTraitment par son identifiant
   * @param id
   * @returns
   */
  deleteTypeTraitment(id: any): Observable<ResponseDto<TypeTraitment>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/type-traitment/${id}`).pipe(share());
  }
}
