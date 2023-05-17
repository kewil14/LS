import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { TypeLaboratoire } from '../models/type-laboratoire.modal';

@Injectable({ providedIn: 'root' })
export class TypeLaboratoireService {

  constructor(private http: HttpClient) { }

  /**
   * liste des typeLaboratoire
   * @returns
   */
  findTypeLaboratoireAll(): Observable<ResponseDto<Array<TypeLaboratoire>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-laboratoire`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<TypeLaboratoire>>
   */
  updateTypeLaboratoire(entity: any): Observable<ResponseDto<TypeLaboratoire>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/type-laboratoire`, entity).pipe(share());
  }

  /**
   * creer une nouvelle typeLaboratoire
   * @param entity
   * @returns
   */
  createTypeLaboratoire(entity: any): Observable<ResponseDto<TypeLaboratoire>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/type-laboratoire`, entity).pipe(share());
  }

  /**
   * rechercher une typeLaboratoire par son identifiant
   * @param idTypeLaboratoire
   * @returns
   */
  findTypeLaboratoireById(idTypeLaboratoire: any): Observable<ResponseDto<TypeLaboratoire>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-laboratoire/${idTypeLaboratoire}`).pipe(share());
  }
  
  /**
   * Supprimer une typeLaboratoire par son identifiant
   * @param id
   * @returns
   */
  deleteTypeLaboratoire(id: any): Observable<ResponseDto<TypeLaboratoire>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/type-laboratoire/${id}`).pipe(share());
  }
}
