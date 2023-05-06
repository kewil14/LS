import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { Forme } from '../models/forme.modal';
import { API_URLS } from '../../config/app.url.config';

@Injectable({ providedIn: 'root' })
export class FormeService {

  constructor(private http: HttpClient) { }

  /**
   * liste des forme
   * @returns
   */
  findAllForme(): Observable<ResponseDto<Array<Forme>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/forme`).pipe(share());
  }

  /**
   * rechercher une forme par son identifiant
   * @param idForme
   * @returns
   */
  findFormeById(idForme: any): Observable<ResponseDto<Forme>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/forme/${idForme}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<Forme>>
   */
  updateForme(entity: any): Observable<ResponseDto<Forme>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/forme`, entity).pipe(share());
  }

  /**
   * creer une nouvelle forme
   * @param entity
   * @returns
   */
  addForme(entity: any): Observable<ResponseDto<Forme>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/forme`, entity).pipe(share());
  }

  /**
   * Supprimer une forme par son identifiant
   * @param id
   * @returns
   */
  deleteForme(id: any): Observable<ResponseDto<Forme>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/forme/${id}`).pipe(share());
  }

}
