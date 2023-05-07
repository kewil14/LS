import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDto } from '../dto/response-dto.modal';
import { share } from 'rxjs/operators';
import { Produit } from '../models/produit.modal';
import { API_URLS } from '../../config/app.url.config';

@Injectable({ providedIn: 'root' })
export class ProduitService {

  constructor(private http: HttpClient) { }

  /**
   * liste des produit
   * @returns
   */
  findAllProduit(): Observable<ResponseDto<Array<Produit>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/produit`).pipe(share());
  }

  /**
   * rechercher une produit par son identifiant
   * @param idProduit
   * @returns
   */
  findProduitById(idProduit: any): Observable<ResponseDto<Produit>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/produit/${idProduit}`).pipe(share());
  }
  
  /**
   * update
   * @param entity 
   * @returns Observable<ResponseDto<Produit>>
   */
  updateProduit(entity: any, idCategorie: any, idForme: any): Observable<ResponseDto<Produit>> {
    return this.http.put(API_URLS.HEALTH_CORE_URL + `/api/produit/${idCategorie}/${idForme}`, entity).pipe(share());
  }

  /**
   * creer une nouvelle produit
   * @param entity
   * @returns
   */
  addProduit(entity: any, idCategorie: any, idForme: any): Observable<ResponseDto<Produit>> {
    return this.http.post(API_URLS.HEALTH_CORE_URL + `/api/produit`, entity).pipe(share());
  }

  /**
   * Supprimer une produit par son identifiant
   * @param id
   * @returns
   */
  deleteProduit(id: any): Observable<ResponseDto<Produit>> {
    return this.http.delete(API_URLS.HEALTH_CORE_URL + `/api/produit/${id}`).pipe(share());
  }

  /**
   * findProduitByIdCategorie
   * @param idCategorie 
   * @returns Observable<ResponseDto<Array<Produit>>>
   */
  findProduitByIdCategorie(idCategorie: any): Observable<ResponseDto<Array<Produit>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/produit/categorie/${idCategorie}`).pipe(share());
  }
  
  /**
   * findProduitByIdForme
   * @param idForme 
   * @returns Observable<ResponseDto<Array<Produit>>>
   */
  findProduitByIdForme(idForme: any): Observable<ResponseDto<Array<Produit>>> {
    return this.http.get(API_URLS.HEALTH_CORE_URL + `/api/produit/forme/${idForme}`).pipe(share());
  }
  
  /**
   * updateProduitPicture
   * @param idProduit 
   * @param data 
   * @returns Observable<ResponseDto<Produit>>
   */
  updateProduitPicture(idProduit: any, data: FormData): Observable<ResponseDto<Produit>> {
    return this.http.post<any>(API_URLS.HEALTH_CORE_URL + `/api/produit/image/${idProduit}`, data).pipe(share());
  }

}
