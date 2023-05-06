import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { ResponseDto } from '../dto/response-dto.modal';
import { API_URLS } from '../../config/app.url.config';
import { Dci } from '../models/dci.modal';

@Injectable({
  providedIn: 'root'
})
export class DciService {

  constructor(private http: HttpClient) { }

  /**
   * liste des Dci
   * @returns
   */
  findAllDci(): Observable<ResponseDto<Array<Dci>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/dci`).pipe(share());
  }

  /**
   * rechercher une Dci par son identifiant
   * @param idDci
   * @returns
   */
  findDciById(idDci: any): Observable<ResponseDto<Dci>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/dci/${idDci}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<Dci>>
   */
  updateDci(entity: any): Observable<ResponseDto<Dci>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/dci`, entity).pipe(share());
  }

  /**
   * creer une nouvelle Dci
   * @param entity
   * @returns
   */
  addDci(entity: any): Observable<ResponseDto<Dci>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/dci`, entity).pipe(share());
  }

  /**
   * Supprimer une Dci par son identifiant
   * @param id
   * @returns
   */
  deleteDci(id: any): Observable<ResponseDto<Dci>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/dci/${id}`).pipe(share());
  }

}