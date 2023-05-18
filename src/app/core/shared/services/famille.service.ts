import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { API_URLS } from '../../config/app.url.config';
import { Famille } from '../models/famille.modal';

@Injectable({ providedIn: 'root' })
export class FamilleService {

  constructor(private http: HttpClient) { }

  /**
   * liste des Famille
   * @returns
   */
  findAllFamille(): Observable<ResponseDto<Array<Famille>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/famille`).pipe(share());
  }

  /**
   * rechercher une Famille par son identifiant
   * @param idFamille
   * @returns
   */
  findFamilleById(idFamille: any): Observable<ResponseDto<Famille>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/famille/${idFamille}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<Famille>>
   */
  updateFamille(entity: any): Observable<ResponseDto<Famille>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/famille`, entity).pipe(share());
  }

  /**
   * creer une nouvelle Famille
   * @param entity
   * @returns
   */
  addFamille(entity: any): Observable<ResponseDto<Famille>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/famille`, entity).pipe(share());
  }

  /**
   * Supprimer une Famille par son identifiant
   * @param id
   * @returns
   */
  deleteFamille(id: any): Observable<ResponseDto<Famille>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/famille/${id}`).pipe(share());
  }

}
