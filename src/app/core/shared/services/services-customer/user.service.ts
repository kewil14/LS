import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../config/app.url.config';
import { share } from 'rxjs/operators';
import { User } from '../../models/modal-customer/user.modal';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * findUserByInstitution
   * @returns 
   * size=20&page=0 for parameters
   */
  findUserByInstitution(params: {[param: string]: string}): Observable<Array<User>> {
    return this.http.get<Array<User>>(API_URLS.HOSPI_CUSTOMERS_URL + `/api/customers/my-institution`, {params}).pipe(share());
  }
  
  /**
   * findUserByToken
   * @returns Observable<User>
   */
  findUserByToken(): Observable<User> {
    return this.http.get(API_URLS.HOSPI_CUSTOMERS_URL + `/api/authenticate`).pipe(share());
  }
}
