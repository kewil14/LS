import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { TypeAllergie } from '../models/type-allergie.modal';

@Injectable({ providedIn: 'root' })
export class TypeAllergieService {

  constructor(private http: HttpClient) { }

  /**
   * liste des typeAllergie
   * @returns
   */
  findTypeAllergieAll(): Observable<ResponseDto<Array<TypeAllergie>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-allergie`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<TypeAllergie>>
   */
  updateTypeAllergie(entity: any): Observable<ResponseDto<TypeAllergie>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/type-allergie`, entity).pipe(share());
  }

  /**
   * creer une nouvelle typeAllergie
   * @param entity
   * @returns
   */
  createTypeAllergie(entity: any): Observable<ResponseDto<TypeAllergie>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/type-allergie`, entity).pipe(share());
  }

  /**
   * rechercher une typeAllergie par son identifiant
   * @param idTypeAllergie
   * @returns
   */
  findTypeAllergieById(idTypeAllergie: any): Observable<ResponseDto<TypeAllergie>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/type-allergie/${idTypeAllergie}`).pipe(share());
  }
  
  /**
   * Supprimer une typeAllergie par son identifiant
   * @param id
   * @returns
   */
  deleteTypeAllergie(id: any): Observable<ResponseDto<TypeAllergie>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/type-allergie/${id}`).pipe(share());
  }
}
