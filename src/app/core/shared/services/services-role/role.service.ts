import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, groupBy, mergeMap, share } from 'rxjs';
import { Role } from '../../models/modal-role/role.modal';
import { ResponseDto } from '../../dto/response-dto.modal';
import { API_URLS } from 'src/app/core/config/app.url.config';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: HttpClient
  ) { }
  
  /**
   * Rechercher tous les roles de l'application
   * @returns Observable<ResponseDto<Array<Role>>>
   */
  findAllRoles(): Observable<Array<Role>> {
    return this.http.get<Array<Role>>(API_URLS.HOSPI_CUSTOMERS_URL + `/api/roles`).pipe(share());
  }

  /**
   * Rechercher la liste des authorities
   * @param nameRole 
   * @returns Observable<Role[]>
   */
  findAllAuthorities(name: string): Observable<Role[]> {
    return this.http.get<Array<Role>>(API_URLS.HOSPI_CUSTOMERS_URL + `/api/role`, {params:{name}}).pipe(share())
  }
  
  /**
   * Rechercher tous les roles de l'application par idRefference du role
   * @param idRef 
   * @returns Observable<ResponseDto<Array<Role>>>
   */
  findRoleByIdRef(idRef: any): Observable<Array<Role>> {
    return this.http.get<Role[]>(API_URLS.HOSPI_CUSTOMERS_URL + `/api/role/ref/${idRef}`).pipe(share());
  }
  
  /**
   * rechercher tous les roles dans l'application par type de role
   * @param type 
   * @returns Observable<ResponseDto<Array<Role>>>
   */
  findRoleByType(type: any): Observable<Array<Role>> {
    return this.http.get<Role[]>(API_URLS.HOSPI_CUSTOMERS_URL + `/api/role/type/${type}`).pipe(share());
  }
  
  /**
   * Rechercher un role par son identifiant
   * @param idRole 
   * @returns Observable<ResponseDto<Role>>
   */
  findRoleById(idRole: any): Observable<Role> {
    return this.http.get(API_URLS.HOSPI_CUSTOMERS_URL + `/api/role/${idRole}`).pipe(share());
  }
  
  /**
   * Creation d'un role administrateur dans le systeme
   * @param role 
   * @returns Observable<ResponseDto<Role>>
   */
  createRoleAdmin(role: Role): Observable<Role> {
    return this.http.post(API_URLS.HOSPI_CUSTOMERS_URL + `/api/role/admin`, role).pipe(share());
  }

  /**
   * Mettre a jour les informations d'un role dans le systeme
   * @param role 
   * @returns Observable<ResponseDto<Role>> 
   */
  updateRole(role: Role): Observable<Role> {
    return this.http.put(API_URLS.HOSPI_CUSTOMERS_URL + `/api/role`, role).pipe(share());
  }

}
