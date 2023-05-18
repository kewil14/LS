import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { API_URLS } from '../../../config/app.url.config';
import { AuthentificationDto } from '../../dto/authentification-dto.modal';
import { LoginDto } from '../../dto/login-dto.modal';

@Injectable({ providedIn: 'root' })
export class AuthentificationService {

  constructor(
    private http: HttpClient
  ) { }
  
  /**
   * login
   * @param loginDto 
   * @returns Observable<AuthentificationDto>
   */
  login(loginDto: LoginDto): Observable<AuthentificationDto> {
    return this.http?.post(API_URLS.HOSPI_CUSTOMERS_URL + `/api/authenticate/token`, loginDto).pipe(share());
  }
  
  /**
   * LoginDto
   * @param loginDto 
   * @returns Observable<LoginDto>
   */
  resetPassword(loginDto: LoginDto): Observable<any> {
    return this.http.post(API_URLS.HOSPI_CUSTOMERS_URL + `/reset-password`, loginDto).pipe(share());
  }
}






		
			
