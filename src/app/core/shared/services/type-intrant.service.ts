import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { TypeIntrant } from '../models/type-intrant.modal';

@Injectable({ providedIn: 'root' })
export class TypeIntrantService {

  constructor(private http: HttpClient) { }

  /**
   * liste des typeIntrant
   * @returns
   */
  findTypeIntrantAll(): Observable<ResponseDto<Array<TypeIntrant>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-intrant`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<TypeIntrant>>
   */
  updateTypeIntrant(entity: any): Observable<ResponseDto<TypeIntrant>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/type-intrant`, entity).pipe(share());
  }

  /**
   * creer une nouvelle typeIntrant
   * @param entity
   * @returns
   */
  createTypeIntrant(entity: any): Observable<ResponseDto<TypeIntrant>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/type-intrant`, entity).pipe(share());
  }

  /**
   * rechercher une typeIntrant par son identifiant
   * @param idTypeIntrant
   * @returns
   */
  findTypeIntrantById(idTypeIntrant: any): Observable<ResponseDto<TypeIntrant>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-intrant/${idTypeIntrant}`).pipe(share());
  }
  
  /**
   * Supprimer une typeIntrant par son identifiant
   * @param id
   * @returns
   */
  deleteTypeIntrant(id: any): Observable<ResponseDto<TypeIntrant>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/type-intrant/${id}`).pipe(share());
  }
}
