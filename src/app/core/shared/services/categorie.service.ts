import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { Categorie } from '../models/categorie.modal';
import { API_URLS } from '../../config/app.url.config';

@Injectable({ providedIn: 'root' })
export class CategorieService {

  constructor(private http: HttpClient) { }

  /**
   * liste des categorie
   * @returns
   */
  findAllCategorie(): Observable<ResponseDto<Array<Categorie>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/categorie`).pipe(share());
  }

  /**
   * rechercher une categorie par son identifiant
   * @param idCategorie
   * @returns
   */
  findCategorieById(idCategorie: any): Observable<ResponseDto<Categorie>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/categorie/${idCategorie}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<Categorie>>
   */
  updateCategorie(entity: any): Observable<ResponseDto<Categorie>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/categorie`, entity).pipe(share());
  }

  /**
   * creer une nouvelle categorie
   * @param entity
   * @returns
   */
  createCategorie(entity: any): Observable<ResponseDto<Categorie>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/categorie`, entity).pipe(share());
  }

  /**
   * Supprimer une categorie par son identifiant
   * @param id
   * @returns
   */
  deleteCategorie(id: any): Observable<ResponseDto<Categorie>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/categorie/${id}`).pipe(share());
  }

}
